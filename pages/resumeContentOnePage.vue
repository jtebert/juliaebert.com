<template>
    <!-- <div class="resume hide-links-in-print"> -->
    <div class="resume">
        <resume-header
            name="Julia Ebert"
            subtitle="PhD Candidate &bull; Robotics Researcher &bull; Boston, MA"
            :links='[
                {to: "https://juliaebert.com", icon: "web", text:"juliaebert.com"},
                {to: "mailto:julia@juliaebert.com", icon: "email", text:"julia@juliaebert.com"},
                {to: "https://github.com/jtebert", icon: "github", text:"github.com/jtebert"},
                {to: "https://linkedin.com/in/jtebert", icon: "linkedin", text:"linkedin.com/in/jtebert"},
                //{icon: "phone", text:"617-949-0214"}
            ]'
        ></resume-header>

        <div slot="content">

            <h2>Education</h2>

            <cv-entry
                location="Cambridge, MA"
                title="Harvard University"
                subtitle='PhD Candidate in Computer Science'
                dates='Expected 2022'
                :tasks="[
                    'Department of Energy Computation Science Graduate Fellow (DOE CSGF) &bull; Siebel Scholar &bull; 3.96 GPA',
                    'Thesis: <i>Distributed Perception and Decision-making for Inspection by Autonomous Robot Collectives</i>']"
            ></cv-entry>
            <cv-entry
                location="London, UK"
                title="Imperial College London"
                dates='2016'
                subtitle='Master of Research (MRes) in Bioengineering, with Distinction'
                :tasks="[
                    'Marshall Scholar &bull; Thesis: <i>Assisting Balance Recovery with a Lower Limb Exoskeleton</i>']"
            ></cv-entry>
            <cv-entry
                location="Boston, MA"
                title="Northeastern University"
                subtitle="BS in Behavioral Neuroscience, Minor in Computer Science"
                dates='2015'
                :tasks="[
                    'Goldwater Scholar &bull; summa cum laude &bull; 3.98 GPA']"
            ></cv-entry>

            <h2>Skills</h2>

            <cv-skill
                category="Computer Science"
                :skills="[
                'Algorithm development', 'Python', 'C/C++ (including embedded programming and Arduino)', 'Robot Operating System (ROS)', 'Linux', 'Git/version control', 'MATLAB', 'JavaScript']"
            ></cv-skill>
            <cv-skill
                category="Engineering"
                :skills="[
                'Computer-aided design (OnShape, Fusion)', 'Circuit design (Eagle)', '3D printing', 'CNC milling', 'Laser cutting']"
            ></cv-skill>

            <h2>Research Experience</h2>

            <cv-entry
                location="Cambridge, MA"
                title="Harvard University Self-Organizing Systems Research Group"
                dates='2016 --'
                subtitle='Doctoral researcher'
                :tasks="[
                    'Developing algorithms for collective spatial decision-making in simulated and physical robot collectives. Includes developing bio-inspired and Bayesian decision and movement algorithms in low-bandwidth communication regimes.',
                    'Created Kilosim, an open-source multi-robot simulator (C++) capable of efficiently simulating hundreds of robots at up to 1000x real time.',
                    'Collaborating with MIT Media Lab to create heterogeneous robot swarm for inspection on space stations, including algorithm development and hardware testing in microgravity (Zero-G flights).',
                     ]"></cv-entry>

            <cv-entry
                location="Livermore, CA"
                dates='2018 --'
                title="Lawrence Livermore National Laboratory"
                subtitle="Summer intern, ongoing collaboration"
                :tasks="[
                    'Designing multi-agent algorithms for orbit tracking (space situational awareness, SSA) and maneuver detection with satellite constellations.',
                    'Programmed, refactored, and documented research codebase (Python) for SSA, now used extensively by SSA researchers at LLNL. Developed accompanying simulator and visualization tools (Python).',
                ]"></cv-entry>

            <cv-entry
                location="London, UK"
                title="Imperial College Human Robotics Group"
                subtitle='Post-graduate research assistant'
                dates='2015 -- 2016'
                :tasks="[
                    'Developed algorithms for human-robot co-control of the LOPES exoskeleton in standing a walking balance recovery. Tested with human participants and modeled in Simulink.']"
            ></cv-entry>

            <h2>Teaching & Mentoring Experience</h2>

            <cv-entry
                location="Cambridge, MA"
                title="Harvard University"
                :tasks="[
                    {date: '2021',
                     task: '<b>Co-supervisor,</b> ETH masters thesis on swarm inspection algorithms'},
                    {date: '2018 -- 2021',
                     task: '<b>Teaching staff,</b> How To Make (Almost) Anything, Harvard section (3 semesters)'},
                    {date: 'Summer 2019',
                     task: '<b>Research Experience for Undergraduates (REU) mentor</b> for Kilobot research and outreach project'},
                    {date: 'Spring 2018',
                     task: '<b>Teaching fellow,</b> Autonomous Robot Systems',
                     link: 'https://canvas.harvard.edu/courses/37276'}]"
            ></cv-entry>

            <h2>Selected Publications</h2>

            <publication-list
                class="is-print-only"
                highlight-author="Ebert"
                format="short"
                :pub-key-filter="['ebert2020icra', 'farkhatdinov2019', 'ebert2018aamas']"
                :showLinks="false"
            ></publication-list>

            <h2>Interests & Activities</h2>
            <cv-skill
                category="Outreach"
                :skills="['NPR <i>Brains On</i> podcast guest', 'FIRST Lego League judge', 'Harvard <i>Science in the News</i> public lecture']"
            ></cv-skill>
            <cv-skill
                category="Personal"
                :skills="['Curling (Harvard club curling team)', 'Web design & development', 'Open source 3D print models']"
            ></cv-skill>

        </div>
    </div>
    <!-- Co-developed and programmed labs and assignments for upper-level undergraduate course (Turtlebot robots programmed with Python and ROS) -->
</template>

<script>
import PublicationList from "~/components/PublicationList.vue";
import CvEntry from "~/components/cv/CvEntry.vue";
import CvAward from "~/components/cv/CvAward.vue";
import CvSkill from "~/components/cv/CvSkill.vue";
import IconLink from "~/components/IconLink.vue";
import ResumeHeader from "~/components/cv/ResumeHeader.vue";

export default {
  components: {
    PublicationList,
    CvEntry,
    CvAward,
    CvSkill,
    IconLink,
    ResumeHeader,
    CvAward,
  },
};
</script>
