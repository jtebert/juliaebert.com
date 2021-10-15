<template>
<cover-letter
    date="August 18, 2021"
    address="
        Contact Name<br>
        Title (if known)<br>
        Realtime Robotics<br>
        27 Wormwood St Ste 110<br>
        Boston, MA 02210
    ">
<vue-markdown>
Dear Hiring Manager,

I am writing to apply for the robotics scientist position at Realtime Robotics. When I attended the Mass Robotics virtual career fair this spring(?), I had the chance to meet with a few members of the team and learn about ..............
I will be completing my PhD in Computer Science at Harvard University this spring, and I believe that my algorithm development skills, experience writing well-constructed code, and ....... will be a great fit for the position.

Relevant experiences:

I have spent my PhD developing multi-robot algorithms, which I think makes me ideally situated to develop algorithms.

In addition to research, I have focused on developing and encouraging well-designed and well-documented code. During my PhD, I developed Kilosim, an open source C++ simulator for large multi-robot collectives. As an intern in the physics department at Lawrence Livermore National Laboratory, I created a new Python astrophysics code base integrating and refactoring several existing code bases in multiple languages, as well as communicating with the team to understand their requirements and domain knowledge for the project. The resulting library has since been central to a multi-million dollar research project funded by the national lab.

I have also led workshops for my research group on version control and improving their coding design practices, becoming a resource for others to develop reusable ..... code.

I also have a strong appreciation of the challenges associated with developing for real hardware. I have developed algorithms for the Kilobot robots, created my own robot platform (including hardware, electronics design, and embedded software), served as a teaching fellow for a robotics course on Turtlebots, and developed code for a robotic exoskeleton.

- Developing simulator at LLNL (included connecting with their domain knowledge. wrote code, refactoring and documenting code to implement best practices), now used by team of astrophysicists and astronomers on a multi-year, multi-million dollar project funded by the national lab.
- Have experience writing performant simulation code in C++, thanks to the open-source simulator (Kilosim) that I have developed during my PhD
- Understand the connection between code and hardware. I have written code for existing physical robots (Kilobots), as well as have experience creating my own robot -- including the hardware, circuit board design, and embedded software, and serving as a teaching fellow (and developing code) for a robotics course using Turtlebots and ROS.
- You want someone who can work with application-side technical experts. With a diverse background in neuroscience, bioengineering, and computer science, I have experience bridging these fields in interdisciplinary teams/projects.
- masters/robotic exoskeleton = developing robots that work (robustly) for and with people. Undergraduate research on human motor neuroscience = understanding human-in-the-loop behavior/control.

- why going to a startup?
- why I want to (and can help) determine new features and development for the company

job description: https://rtr.ai/robotics-scientist-(boston-or-berlin)/


Sincerely,

Julia Ebert
</vue-markdown>

</cover-letter>
</template>

<script>
import CoverLetter from "~/components/CoverLetter.vue";
import VueMarkdown from "vue-markdown";

export default {
  components: {
    CoverLetter,
    VueMarkdown,
  },
};
</script>