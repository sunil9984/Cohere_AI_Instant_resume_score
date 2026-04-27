const ResumeModel = require('../Models/resume');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const path = require('path');
const {CohereClient} = require('cohere-ai');

const cohere = new CohereClient({
    token: "pQIO2ph7WTOHMoNzfDdWuw3TV2REEsmPaOMm1vXr",
});


exports.addResume = async(req,res)=>{
    try{
        const {job_desc, user} = req.body;
                if (!user) {
      return res.status(400).json({ message: "User ID missing" });
    }
     if (!req.file) {
      return res.status(400).json({ message: "Resume file missing" });
    }
        
        const fs = require("fs");
        const pdfPath  = req.file.path;
   


        
        const dataBuffer = fs.readFileSync(pdfPath); 
        const pdfData = await pdfParse(dataBuffer)
       // console.log(pdfData);   

       const prompt =`

        You are a resume checker assistent.
        Compare the fallowing resume text with given JD amd give the result (100) give the feedback

        Resume
        ${pdfData.text}

        Job Description:
        ${job_desc}

        Return the scrore and a short explanation as this--

        Score : XX
        Reason :--



        
        `
        ;
        
        const response = await cohere.chat({
            model: "command-a-03-2025",
            message: prompt,
            max_tokens: 100,
            temperature: 0.7,
        });
        

        // let result = response.text;
         let result =
      response.text ||
      response.message?.content?.[0]?.text ||
      "";

        // console.log(result);


        const match = result.match(/Score:\s*(\d+)/);
        const score = match ? parseInt(match[1],10) : null;

        const reasonMatch = result.match(/Reason:\s*([\s\S]*)/);
        const reason = reasonMatch ? reasonMatch[1].trim() : null;

        const newResume = new ResumeModel({
            user,
            resume_name : req.file.originalname,
            job_desc,
            score,
            feedback : reason
        })

        await newResume.save();
        fs.unlinkSync(pdfPath);

        res.status(200).json({message:"Your analysis are ready",data:newResume});



        console.log(score);
        console.log(reason);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'server error',message: err.message});
    }
}



exports.getAllResumesForUser = async (req,res) =>{
    try{
        const {user}=req.params;
        let resumes = await ResumeModel.find({user: user}).sort({createdAt: -1});//For a particular user
        return res.status(200).json({message:"Your previous history",resumes: resumes});   
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'server error',message: err.message});
    }
}

exports.getResumeforAdmin = async (req,res)=>{
    try{

        let resumes = await ResumeModel.find({}).sort({createdAt: -1}).populate('user');//default all resume
        return res.status(200).json({message:"All checked resumes history",resumes: resumes});

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'server error',message: err.message});
    }
}