const uploadResume = async (req, res) => {
  console.log("BODY:", req.body);
  console.log("FILE:", req.file);

  const { title } = req.body;
  const file = req.file?.filename;
  if (!file) return res.send("No file uploaded.");

  await Resume.create({ title, file, user: req.user.id });
  res.redirect("/resumes/dashboard");
};
