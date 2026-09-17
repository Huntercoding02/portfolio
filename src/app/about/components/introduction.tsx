 type IntroductionProps = {
    name: string;
    nickName: string;
        };
        

export default function Introduction({ name, nickName }:IntroductionProps) {
        return(
            <section>
                 <h2>Introduction</h2>
      <p>My name is {name} Kamonrattanasuk. </p>
        <p>you can call me {nickName} </p>
            </section>
           
        )
    }