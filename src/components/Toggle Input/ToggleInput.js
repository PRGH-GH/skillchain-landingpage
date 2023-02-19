function ToggleInput {
  return (
    <body>
      <div className="togglecard">
        <h1>Let's Get Started</h1>
        <p>Select your role: </p>
        <button className="togglecard__btn1">Employer</button>
        <button className="togglecard__btn2">Job Seeker</button>
      </div>

      <div className="instructions">
        <div>
          <h2>Create an account</h2>
            <p>Sign up for an account on the job posting site to start browsing and applying for job opportunities</p>
        </div>
        <div>
          <h2>Build your profile</h2>
            <p>Fill out your profile with relevent information about your experience, education and skills to make a good first impression
              on potential employersf
            </p>
        </div>
        <div>  
          <h2>Start Applying</h2>
            <p>Sign up for an account on the job posting site to start browsing and applying for job opportunities</p>
        </div>
      </div>    
  </body>

  )
}

export default ToggleInput;