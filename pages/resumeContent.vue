<template>
    <div class="resume">
        <div class="resume-header is-print-only">
            <!-- <img class="logo" src="/imgs/logos/logo-black.svg"> -->
            <div class="name">
                <h1>Julia Ebert</h1>
                <p class="subtitle">
                    PhD Candidate &bull; Robotics Researcher &bull; Cambridge, MA
                </p>
            </div>
            <div class="links">
                <icon-link to="https://juliaebert.com" icon="web" size="">juliaebert.com</icon-link>
                <icon-link
                    to="mailto:julia@juliaebert.com"
                    icon="email"
                    size=""
                >julia@juliaebert.com</icon-link>
                <icon-link
                    to="https://github.com/jtebert"
                    icon="github-circle"
                    size=""
                >github.com/jtebert</icon-link>
                <icon-link
                    to="https://linkedin.com/in/jtebert"
                    icon="linkedin"
                    size=""
                >linkedin.com/in/jtebert</icon-link>
            </div>
        </div>

        <div slot="content">

            <h2>Education</h2>

            <cv-entry
                location="Cambridge, MA"
                title="Harvard University"
                subtitle='PhD Candidate in Computer Science<br>MS in Computer Science'
                dates='2022 (expected)<br>2019'
                :tasks="[
                    'Department of Energy Computation Science Graduate Fellow (DOE CSGF) &bull; Siebel Scholar &bull; 3.96 GPA',
                    'Thesis: <i>A Framework for Distributed Perception and Decision-making in Autonomous Robot Collectives</i>']"
            ></cv-entry>
            <cv-entry
                location="London, UK"
                title="Imperial College London"
                dates='2016'
                subtitle='Master of Research (MRes) in Bioengineering, with Distinction'
                :tasks="[
                    'Marshall Scholar',
                    'Thesis: <i>Assisting Balance Recovery with a Lower Limb Exoskeleton</i>']"
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
                'Algorithm development', 'Python (including NumPy, Pandas, Django)', 'C/C++ (including embedded programming,AVR, Arduino, OpenMP)', 'Robot Operating System (ROS)', 'Linux', 'Git/version control', 'MATLAB', 'JavaScript (including Vue.js)', 'Java']"
            ></cv-skill>
            <cv-skill
                category="Engineering & Fabrication"
                :skills="[
                'Computer-aided design (OnShape, Fusion 360)', 'Electronics design (Eagle) and production', '3D printing', 'CNC milling', 'Soldering', 'Laser cutting', 'Molding and casting']"
            ></cv-skill>

            <h2>Experience</h2>

            <cv-entry
                location="Cambridge, MA"
                title="Harvard University Self-Organizing Systems Research Group, <span>Prof. Radhika Nagpal</span>"
                dates='2016 --'
                subtitle='PhD research assistant'
                :tasks="[
                    'Developing a framework for collective spatial decision-making in simulated and physical robot collectives. Includes developing bio-inspired and Bayesian decision and movement algorithms, and robust low-bandwidth communication.',
                    'Created Kilosim, an open-source multi-robot simulator (C++) capable of efficiently simulating hundreds of robots at up to 1000x real time.',
                    'Collaborating with MIT researchers to create heterogeneous robot swarm for inspection on space stations.',
                    'Designing and manufacturing LARVAbot: a collective of bioinspired robots to perform aggregate locomotion. Includes designing custom PCB, embedded programming, CAD and 3D printing of robot, and algorithm design for aggregate movement.',
                    'Teaching and mentoring: Supervised REU summer project and ETH masters thesis. Served as teaching fellow for undergraduate robotics course (ROS, Turtlebots).'
                     ]"></cv-entry>

            <cv-entry
                location="Livermore, CA"
                dates='2018 --'
                title="Lawrence Livermore National Laboratory, <span>Dr. Michael Schneider</span>"
                subtitle="Summer internship, ongoing collaboration"
                :tasks="[
                    'Designing multi-agent algorithms for orbit tracking (space situational awareness, SSA) and maneuver detection with satellite constellations.',
                    'Programmed, refactored, and documented research codebase (Python) for SSA, now used extensively by SSA researchers at LLNL.',
                    'Developed a simulator and visualization tools (Python) for collective orbit observation by low earth orbit satellites.',
                ]"></cv-entry>

            <cv-entry
                location="London, UK"
                title="Imperial College Human Robotics Group, <span>Prof. Etienne Burdet and Dr. Ildar Farkhatdinov</span>"
                subtitle='Post-graduate research assistant'
                dates='2015 -- 2016'
                :tasks="[
                    'Developed algorithms for human-robot co-control of the LOPES exoskeleton in standing a walking balance recovery. Tested with human participants and modeled in Simulink.']"
            ></cv-entry>
            <span class="page-break"></span>
            <cv-entry
                location="Boston, MA"
                title="Northeastern University Action Lab, <span>Prof. Dagmar Sternad</span>"
                dates='2011 -- 2015'
                subtitle='Undergraduate research assistant, including 6-month co-op'
                :tasks="[
                     'Programmed HapticMaster robot (C++) and conducted human-subject experiments control of objects with complex dynamics, resulting in two publications.',
                     'Designed and programmed (Matlab) experiments to assess ability of humans to learn and retain a motor task with rhythmic and discrete components. Conducted multi-month data collection (including with EEG) and analyzed results for Honors thesis.']"
            ></cv-entry>
            <cv-entry
                location="Tübingen, DE"
                title="Max Planck Institute for Intelligent Systems, <span>Prof. Stefan Schaal</span>"
                subtitle='Research co-op'
                dates='July -- Dec. 2013'
                :tasks="[
                     'Designed and programmed a learning task in which subjects learned to map high-dimensional hand joint movements to move a 2D cursor, conducted pilot experiments, and presented results at conference.']"
            ></cv-entry>

            <h2>Interests & Activities</h2>
            <cv-skill
                category="Outreach"
                :skills="['NPR <i>Brains On</i> podcast guest', 'FIRST Lego League judge', 'Harvard <i>Science in the News</i> public lecture']"
            ></cv-skill>
            <cv-skill
                category="Personal"
                :skills="['Curling (Harvard club curling team)', 'Web design & development', 'Open source 3D print models']"
            ></cv-skill>


            <h2>Publications</h2>

            <publication-list
                class="is-print-only"
                highlight-author="Ebert"
                :type-filter="['inproceedings', 'article']"
                :showLinks="false"
            ></publication-list>
            <publication-list
                class="is-screen-only"
                highlight-author="Ebert"
                :type-filter="['inproceedings', 'article']"
                :showLinks="true"
            ></publication-list>

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

export default {
  components: {
    PublicationList,
    CvEntry,
    CvAward,
    CvSkill,
    IconLink,
    CvAward,
  },
};
</script>
