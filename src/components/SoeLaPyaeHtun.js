import React, { useEffect, useRef } from 'react'

  const SoeLaPyaeHtun = () => {
    const Skills = {
        "C#": ["ASP.NET Core", "ASP.NET Framework", "ASP.NET API"],
        "Java": ["SPRING BOOT API", "SPRING BOOT FLUX" , "API Development"],
        "Linux": ["Linus System Administration", "Ansible Automation"],
        "JavaScript" : ["JavaScript Native", "JQuery", "Functional Programming", "ReactJS" , "NodeJS"],
        "CSS" : ["BootStrap", "TailwindCSS", "MUI"]
  }

  const boxRef = useRef(null);

  useEffect(() => {
    const boxElement = boxRef.current;

    if (!boxElement) {
      return;
    }

    const updateAnimation = () => {
      const angle =
        (parseFloat(boxElement.style.getPropertyValue("--angle")) + 0.5) % 360;
      boxElement.style.setProperty("--angle", `${angle}deg`);
      requestAnimationFrame(updateAnimation);
    };

    requestAnimationFrame(updateAnimation);
  }, []);


    return (
      <div
      ref={boxRef}
      style={
        {
          "--angle": "0deg",
          "--border-color": "linear-gradient(var(--angle), #070707, #687aff)",
          "--bg-color": "linear-gradient(#131219, #131219)",
        }
      }
      className="flex h-[400px] w-[400px] items-center justify-center rounded-lg border-2 border-[#0000] p-3 [background:padding-box_var(--bg-color),border-box_var(--border-color)]"
    >
     <span className='text-white'>hello</span>
    </div>
    )
  }
  export default SoeLaPyaeHtun


//   `import React from 'react'

//   const SoeLaPyaeHtun = () => {
//     const data = {
//       "Profile" :  "Passionate and driven NUS-ISS Graduate Student seeking a Software Engineer role. 
//                  Proven efficiency with an ability to learn quickly and navigate a programming language,
//                  and other technology. Ready to utilize my skills and passion to further the value of a company.",
//       "Skill": {
//         C#: ["ASP.NET Core", "ASP.NET Framework", "ASP.NET API"],
//         Java: ["SPRING BOOT API", "SPRING BOOT FLUX" , "API Development"],
//         Linux: ["Linus System Administration", "Ansible Automation"],
//         JavaScript : ["JavaScript Native", "JQuery", "Functional Programming", "ReactJS" , "NodeJS"],
//         CSS : ["BootStrap", "TailwindCSS", "MUI"]
//       },
//     };
//     }
//     return (
//       <div>SoeLaPyaeHtun</div>
//     )
//   }
  
//   export default SoeLaPyaeHtun
//   `;