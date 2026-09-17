 type UniversityProps = {
    university: string;
    bootcamp: string;
    major: string;
        };

export default function Education({university,bootcamp,major}:UniversityProps) {
        return(
           <section>
        <h2>Education</h2>
        <p>
          I graduated from {university} 
          with a major in {major}.
          and I also finished the bootcamp from {bootcamp}
        </p>
      </section>
           
        )
    }