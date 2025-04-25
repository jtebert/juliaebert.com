<template>
  <!-- <div class="resume hide-links-in-print"> -->
  <div class="resume">
    <resume-header
      name="Julia Ebert"
      subtitle="Software Engineer &bull; Robotics Researcher &bull; Boston, MA"
      :links='[
        {to: "https://juliaebert.com", icon: "web", text:"juliaebert.com"},
        {to: "mailto:julia@juliaebert.com", icon: "email", text:"julia@juliaebert.com"},
        {to: "https://github.com/jtebert", icon: "github", text:"github.com/jtebert"},
        {to: "https://linkedin.com/in/jtebert", icon: "linkedin", text:"linkedin.com/in/jtebert"},
        {icon: "phone", text:"617-949-0214"}
      ]'
    />

    <div class="block-content content">
      <h2>Skills</h2>
      <cv-skill
        category="Computer Science"
        :skills="[
        'Algorithm development', 'C++', 'Python', 'Linux', 'Docker', 'Robot Operating System (ROS)',  'Git/version control', 'ZMQ', 'Protobuf', 'MATLAB', 'JavaScript']"
      />
      <cv-skill
        category="Engineering"
        :skills="[
        'Computer-aided design (OnShape)', '3D printing', 'Basic PCB design', 'Laser cutting']"
      />

      <h2>Experience</h2>
      <cv-entry
        location="Boston, MA"
        title="Fleet Robotics"
        dates='2023 --'
        subtitle='Autonomy Lead'
        :tasks="[
          'Architect and implement the software system from the ground up, including hardware selection, communication protocols (ZMQ, protobuf), DevOps (Docker, CI/CD pipeline), and user interface development, enabling Fleet\'s first on-ship robot demonstrations.',
          'Manage a team of three software engineers and supervise high school through PhD student interns.',
          'Design and implement robot control systems, safety mechanisms, and a robust logging system.',
          'Develop robust path planning and execution systems for autonomous underwater navigation on 3D curved steel surfaces, addressing challenges of limited sensing and harsh operating conditions.',
          'Lead software project planning, collaborating with product management and executives to align goals, manage timelines, and mitigate risks.',
        ]"
      />
      <cv-entry
        location="Brighton, CO"
        title="Outrider"
        dates='2022 -- 2023'
        subtitle='Software Engineer, Mission Planning (Remote)'
        :tasks="[
          'Spearheaded design and development (C++, ROS) of new multi-robot planning for Outrider\'s of autonomous distribution yard trucks.',
          'Led cross-functional project teams to create new robot behaviors toward product goals.',
          'Supported test site and customer deployments of the mission planning system.'
        ]"
      />
      <cv-entry
        location="Cambridge, MA"
        title="Harvard University Self-Organizing Systems Research Group, <span>Prof. Radhika Nagpal</span>"
        dates='2016 -- 2022'
        subtitle='Doctoral Researcher'
        :tasks="[
          'Developed collective spatial decision-making algorithms for simulated and physical robot collectives. Includes bio-inspired and Bayesian decision and movement algorithms.',
          'Created open-source Kilosim (C++) to simulate hundreds of robots at up to 1000x real time.',
          'Collaborated with MIT Media Lab to create heterogeneous robot swarm for inspection on space stations, including algorithm development and hardware testing in microgravity (Zero-G flights).',
          'Supervised undergraduate and masters student research projects, and taught robotics and digital fabrication courses.',
          // 'Designed and manufactured LARVAbot: a collective of bioinspired robots to perform aggregate locomotion. Includes electronic, mechanical, and algorithm design.'
            ]"/>
      <cv-entry
          location="Livermore, CA"
        dates='Summer 2018'
        title="Lawrence Livermore National Laboratory, <span>Dr. Michael Schneider</span>"
        subtitle="Computational Science Research Intern"
        :tasks="[
          // 'Designed multi-agent algorithms for orbit tracking (space situational awareness, SSA) and maneuver detection with satellite constellations.',
          'Programmed, refactored, and documented research codebase (Python) for space situational awareness (SSA), since used extensively by researchers at LLNL and in review for JOSS publication.',
          'Developed a simulator and visualization tools (Python) for orbit observation by low earth orbit satellites.',
        ]"/>
      <!-- <span class="page-break"></span> -->
      <!-- <cv-entry
        location="London, UK"
        title="Imperial College Human Robotics Group, <span>Prof. Etienne Burdet and Dr. Ildar Farkhatdinov</span>"
        subtitle='Post-graduate Research Assistant'
        dates='2015 -- 2016'
        :tasks="[
          'Developed algorithms for human-robot co-control of the LOPES exoskeleton in standing a walking balance recovery. Tested with human participants and modeled in Simulink.']"
      ></cv-entry> -->
      <!-- <cv-entry
        location="Boston, MA"
        title="Northeastern University Action Lab, <span>Prof. Dagmar Sternad</span>"
        dates='2011 -- 2015'
        subtitle='Undergraduate Research Assistant, including 6-month co-op'
        :tasks="[
          'Programmed HapticMaster robot (C++) and conducted human-subject experiments control of objects with complex dynamics, resulting in two publications.',
          'Designed and programmed (Matlab) experiments to assess ability of humans to learn and retain a motor task with rhythmic and discrete components. Conducted multi-month data collection (including with EEG) and analyzed results for Honors thesis.']"
      ></cv-entry> -->
      <!-- <cv-entry
        location="Tübingen, DE"
        title="Max Planck Institute for Intelligent Systems, <span>Prof. Stefan Schaal</span>"
        subtitle='Research Co-op'
        dates='July -- Dec. 2013'
        :tasks="[
          'Designed and programmed a learning task in which subjects learned to map high-dimensional hand joint movements to move a 2D cursor.',
          'Conducted human subjects experiments and presented results at Neural Control of Movement conference.']"
      ></cv-entry> -->

      <h2>Education</h2>
      <cv-entry
        location="Cambridge, MA"
        title="Harvard University"
        subtitle='PhD in Computer Science'
        dates='2022'
        :tasks="[
          'Thesis: <i>Distributed Decision-making for Inspection by Autonomous Robot Collectives</i>',
          'Department of Energy Computation Science Graduate Fellow (DOE CSGF) &bull; Siebel Scholar',
          ]"
      />
      <cv-entry
        location="London, UK"
        title="Imperial College London"
        dates='2016'
        subtitle='Master of Research (MRes) in Bioengineering, with Distinction'
        :tasks="[
          'Marshall Scholar &bull; Thesis: <i>Assisting Balance Recovery with a Lower Limb Exoskeleton</i>',
          ]"
      />
      <cv-entry
        location="Boston, MA"
        title="Northeastern University"
        subtitle="BS in Behavioral Neuroscience, Minor in Computer Science"
        dates='2015'
      />
      <!-- :tasks="[
        'Goldwater Scholar &bull; summa cum laude &bull; 3.98 GPA']" -->

      <!-- <h2>Teaching & Mentoring Experience</h2> -->

      <!-- <cv-entry
        location="Cambridge, MA"
        title="Harvard University"
        :tasks="[
          {date: '2021',
            task: '<b>Co-supervisor,</b> ETH masters thesis on swarm inspection algorithms'},
          {date: '2018 -- 2021',
            task: '<b>Teaching staff,</b> How To Make (Almost) Anything, Harvard section (3 semesters)'},
          {date: 'Summer 2019',
            task: '<b>REU mentor</b> for Kilobot research and outreach project'},
          {date: 'Spring 2018',
            task: '<b>Teaching fellow,</b> CS 189: Autonomous Robot Systems',
            link: 'https://canvas.harvard.edu/courses/37276'}]"
      ></cv-entry> -->
      <!-- <cv-entry
        location="Boston, MA"
        title="Northeastern University"
        :tasks="[
          {date: '2014 -- 2015',
            task: '<b>Teaching assistant,</b> CS 2500: Fundamentals of Computer Science (2 semesters)'},
          {date: '2012 -- 2014',
            task: '<b>Tutor,</b> CS 2500: Fundamentals of Computer Science (3 semesters)'},
          {date: '2011 -- 2013',
            task: '<b>Undergraduate mentor,</b> Proactive Recruitment in Science and Mathematics (PRISM)'}]"
      ></cv-entry> -->

      <h2 class="is-screen-only">Interests & Activities</h2>
      <cv-skill class="is-screen-only"
        category="Outreach"
        :skills="['NPR <i>Brains On</i> podcast guest', 'FIRST Lego League judge', 'Harvard <i>Science in the News</i> public lecture']"
      />
      <cv-skill class="is-screen-only"
        category="Personal"
        :skills="['Curling', 'Open source 3D print models', 'Web design & development', 'Woodworking']"
      />


      <h2>Select Publications</h2>

      <p class="is-screen-only">You can view all my publications on the <nuxt-link to="/publications">Publications page.</nuxt-link></p>

      <publication-list
        class="is-print-only"
        format="short"
        highlight-author="Ebert"
        :pub-key-filter="['ebert2022', 'ebert2020icra', 'farkhatdinov2019', 'ebert2018aamas']"
        :type-filter="['inproceedings', 'article']"
        :showLinks="false"
      />
      <publication-list
        class="is-screen-only"
        highlight-author="Ebert"
        :pub-key-filter="['ebert2022', 'ebert2020icra', 'farkhatdinov2019', 'ebert2018aamas']"
        :type-filter="['inproceedings', 'article']"
        :showLinks="true"
      />

    </div>
  </div>
  <!-- Co-developed and programmed labs and assignments for upper-level undergraduate course (Turtlebot robots programmed with Python and ROS) -->
</template>

<script>
import PublicationList from "~/components/PublicationList.vue";
import CvEntry from "~/components/cv/CvEntry.vue";
import CvSkill from "~/components/cv/CvSkill.vue";
import ResumeHeader from "~/components/cv/ResumeHeader.vue";

export default {
  components: {
    PublicationList,
    CvEntry,
    CvSkill,
    ResumeHeader,
  },
};
</script>
