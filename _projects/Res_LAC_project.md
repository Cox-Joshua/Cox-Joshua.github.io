---
layout: page
title: "Lunar Autonomy Challenge"
description: Competition to create an Autonomously Mapping Lunar Rover
img: assets/img/projects/Res_LAC/999.png
importance: 1
category: Research
---

[THESIS DOWNLOAD](https://drive.google.com/file/d/1KxmyztrYJJoZc4iO3LYJCu1hseHLLNWa/view?usp=sharing)

The following post details my experience working on the Lunar Autonomy Challenge, which eventually became the basis for my thesis. Much of this is detailed in it, and can be found at the link above. This reading offers a bit more of my personal point of view.

Beginning at the end of 2024, I founded and led a team within my lab (the [Human Centered-Autonomy Lab](https://thehcalab.web.illinois.edu/)) for the [Lunar Autonomy Challenge](https://lunar-autonomy-challenge.jhuapl.edu/) (LAC), a competition created by the collaboration between NASA, Caterpillar, Johns Hopkins University, and Embodied AI. This was the first time NASA ran this competition. Most of my labmates informed me this wouldn’t be their main focus for the future, so I ended up developing nearly the entire solution. That said, most all of my teammates lent me their ears and thoughts at many times throughout this process. I am forever grateful and appreciative for their guidance and input.

The LAC challenged teams across the U.S. to simulate a lunar excavator mobile robot, the ISRU Pilot Excavator (IPEx), autonomously exploring the surface of the moon and mapping elevation in an area around a lunar lander. This would be achieved by focusing on solutions for navigation, mapping, and localization.

As a rough timeline, our team developed a plan in November of 2024. I worked on it until the qualification deadline at the end of February of 2025. I was unable to complete a submittable solution at this point. From that time until mid-July 2025, I made small amounts of progress. I was not sure whether I wanted to pursue this subject more or research some other topics I was looking at during that time. Eventually, I chose to continue working on a solution and use the work for my thesis in order to graduate in the fall of 2025.

This project allowed me to explore and improve my understanding of many areas inherent to exploration rovers. I dedicated hours researching topics novel to me from the ground up. I gained hands on experience in:
- Path planning techniques for autonomous navigation
- Object detection and avoidance algorithms, especially using grid map data
- Computer vision algorithms to generate a point cloud from a stereo camera pair
- Using PyGame to create small applications, like our 2D navigation simulator
- Creating and reading Dockerfiles and Docker environments
- Creating scripts to display, debug, and animate grid map data collected
- Odometry solutions and packages, specifical visual-inertial odometry ones

The figure below shows the initial approach. We would use the software package called “Elevation Mapping CuPy” in order to map the terrain. It requires a point cloud of the surrounding area as well as ROS-style coordinate frames for localization. We also wanted to use a segmentation model with the mapping data in order to properly identify obstacles. This data would be used in the navigation stack, consisting of a global planner optimizing for unexplored areas of the terrain and a local planner for obstacle avoidance. You’ll note we wanted to use another neural network that estimated our battery usage given a planned path. This ended up not being important for the qualifier round as no battery recharging was necessary for the limited mission. For localization, we relied on April tags attached to the central lunar lander, however we wanted to develop a different method down the line using keypoints in order to gain bonus points.

<!-- single pic -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/Res_LAC/000.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

After some initial development, I realized after discussing with my teammates that some things would have to change. I also cut down on the scope of the project. A lot of this work was new to me, and I knew from past projects one of the important goals at this stage is to just get some solution working, then improve on it from there. So, with that in mind, I came up with the following software architecture. The architecture was not changed after this point.

<!-- single pic -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/Res_LAC/001.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

With this new plan in hand, I began developing our code.

<!-- single pic -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/Res_LAC/002.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    VINS-Fusion tracking the rover in RViz alongside the same scene in the simulation.
</div>

<!-- single pic -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/Res_LAC/003.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Disparity map (left) and point cloud (right) generated from stereo image proc ROS package.
</div>

<!-- double pics centered -->
<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/Res_LAC/004.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/Res_LAC/005.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Part of the graphical interface displaying the different possible modes programmed in the simulator (left). Example grid map shown in the “ASTAR” mode (right). It depicts a calculated A* path (pink cells) from a start location (red cell) to a goal location (green cell). Blue cells depict rock obstacles that must be avoided.
</div>
<!-- single pic -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/Res_LAC/006.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Example grids shown in the “AGENT EXPLORE” mode. The left grid depicts the agent (red circle) visiting undiscovered areas (black cells). Black cells that enter its vision (magenta square) are discovered and colored white. The right grid shows the ground truth grid and the current calculated A* path (pink cells) the agent is following.
</div>

<!-- single pic -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/Res_LAC/007.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Example capture of the application in “AGENT EXPLORE” mode.
</div>

<!-- single pic -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/Res_LAC/008.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Raw left front rover image (left), the corresponding elevation mapping cupy elevation grid map (right), and the elevation overlaid on top of the image using ROS visualization tools (bottom).
</div>

After a couple months of work, we had pieces of systems, but had a difficult time integrating everything. Also, we found our stereo to point cloud pipeline was providing subpar results, affecting our mapping. We cobbled together a minimum working solution. Ultimately though, the team was unable to submit anything for the qualifying round, hence ending our attempt at competing.

As the team lead, I thought much about how this happened after the fact, a post-mortem of sorts. The reality is I needed to reach out for assistance sooner. I will spare the nitty-gritty details, but I could have done a better job communicating with the competition staff about submitting our solution. They required our agent to be submitted via Docker, which makes complete sense for an asynchronous, simulation-based competition. However, we were also using Docker for our solution, and we ran into error after error when trying to combine with LAC’s Docker submission process. I eventually asked the staff for guidance and their response was very helpful and accommodating. But, it all happened too late and close to the deadline to submit. I definitely learned that there’s no harm in reaching out for a bit of help, and to also have a plan for what platforms we would be developing our code on. Our initial solution required Docker due to Ubuntu and Python version mismatches, so I should have been using LAC’s Dockerfile setups from the get-go.
All that said, this was not the end of our solution package. I wanted to continue even after our competition run ended in order to get our algorithm running in some capacity. I find the idea of utilizing machine learning for an exploratory rover very interesting, and wanted to see this through.

The first thing I did after failing to meet the qualification deadline was fix our Docker setup. The below picture is a visualization of the new setup for use with the lunar simulator and the team’s source code.

<!-- single pic -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/Res_LAC/009.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

I also explored more point cloud generation techniques in order to have more control over the input into our mapping package. Ideally, an improved point cloud would yield more mapping data. I started by trying to tune the parameters provided from ROS.

<!-- single pic -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/Res_LAC/010.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Untuned (left column) and tuned (right) BM disparity images.
</div>

This process did not improve the point clouds very much. Part of the issue here touches on problems with the lunar environment itself. Low light levels, long shadows, and terrain that is hard to differentiate all culminate in errors in or lack of stereo matching (part of the process of turning a stereo pair into a 3D point cloud). Now this output is not actually too terrible. It is fairly dense with some voids here and there. However, note that the lunar lander, a part of the theoretical mission of this competition, is in view. This creates many distinct points that drastically helps stereo matching. When it is not in view, the disparity maps end up looking like the following:

<!-- double pics centered -->
<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/Res_LAC/011.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/Res_LAC/012.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

This output is not necessarily a bad thing. The colored disparity map shows data for stereo matches that have a high confidence level. My goal was for the output to be a dense map, in order to create a smooth point cloud, which in turn provides continuous grid mapping data. My hope was more data would improve the overall solution of the autonomous agent.

I ended up solving this problem by using a different algorithm to produce a disparity map: semi-global block matching. This method also uses a smoothing filter, which helps create a dense map.

<!-- single pic -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/Res_LAC/013.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Examples of the raw left front rover image (left column), the SGBM disparity map (middle column), and the SGBM with WLS filter disparity map (right column).
</div>

This technique produces a fairly smooth disparity map, but it has a large compute time. This was fine for the competition however, as it was simulation only. We were given limits on real time vs compute time.

Also at this time, I started develop my own tools and scripts in order to compare different sets of parameters and create videos from data. After tuning, I had my finished stereo pair to point cloud pipeline. Since this was a bit of a custom process, I had to create my own ROS node to make this output.

<!-- single pic -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/Res_LAC/014.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Snapshot of script output that creates a video array of the same sequence with different parameter values.
</div>

<!-- single pic -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="https://www.youtube.com/embed/opfbKCPIZDs" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The video shown in the previous figure.
</div>

<!-- triple pics centered -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="https://www.youtube.com/embed/Nm5zaF2ERsY" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="https://www.youtube.com/embed/HqXGlzC3D2E" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="https://www.youtube.com/embed/iuJ11P1QpLY" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Three videos showing the old disparity map algorithm (left), the old algorithm properly tuned (middle), and the new SGBM algorithm tuned (right).
</div>

<!-- single pic -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/Res_LAC/015.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Different snapshots of the raw left front rover image (left column), final disparity map output (middle column), and point cloud (right column, colored by depth).
</div>

Now, I started experimenting more with the elevation data I was receiving. Skipping some details here, but the below images show my general process. I had fun managing this data and developing these scripts to create plots.

<!-- single pic -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/Res_LAC/016.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    (a) Raw elevation grid map data output from elevation mapping cupy. (b) The same data from (a) with the plot bounds set to the center 9 meter by 9 meter square. (c) Properly rotated elevation data to align with rover direction. (d) An example submission map that is built using all frames. This figure shows the first value that appears in each cell.
</div>
 
<!-- single pic -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/Res_LAC/017.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    (a). Raw elevation of the center 9 meter by 9 meter square for some frame of data. (b) The accumulated submission area when keeping the first value that appears in each cell. (c) Same as (b) but allowing values to be updated when new elevation values are assigned to cells. (d) Submission region when applying a running average to each cell. (e) Same as (d) but running average values are only updated upon cells being overwritten.
</div>

With the updated architecture, I drove the rover in simulation to collect elevation data. Below is example data from a single trial, but I did perform many such experiments. I found all produced similar data with this solution.

<!-- single pic -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/Res_LAC/018.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Final elevation grid map to be submitted for scoring.
</div>

<!-- single pic -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/Res_LAC/019.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Final elevation error formed by subtracting the agent’s final elevation grid map with the ground truth information.
</div>

<!-- single pic -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/Res_LAC/020.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    (a). Ground truth elevation grid map. (b) The final elevation plot recorded by the rover agent. (c) Plot to visualize region for outliers to be removed due to the lander heigh being recorded. (d) Resulting map of the final elevation with outliers removed from the lander area. (e). Inpainted grid map to fill voids (f). Subplot (e) downsized to the final elevation grid map size. (g). Final elevation error. (h) Same as (g) with red cells signaling cells that would be as having a correct elevation per the competition guidelines.
</div>


I found that this solution performed poorly. Also, due to the elevation errors I found, I was not able to produce a working rock occupancy grid (which was required for the competition). In turn, rock obstacles could not be detected, and a final autonomous solution was not achievable. According to competition guidelines, this data would have only had a single scoring grid cell (of 3,600 total).

Upon further inspection, it turns out a solely visual-inertial odometry solution for localization created many small elevation errors that stack up when running the rover.

<!-- single pic -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/Res_LAC/021.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The IPEx pose overlaid the ground truth pose (circled in red) after the initializtion process in 6 different example trials, displayed in the ROS visualization tool.
</div>

<!-- single pic -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/Res_LAC/022.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The measured “body” frame of the IPEx rover, estimated from VINS-Mono, drifting from the ground truth pose.
</div>

Now these results may seem negative, but I was extremely happy with everything. I was happy to have followed through on a complex project and understand every bit of it. I had actually planned for ways to solve the issues I was having, but I simply needed to wrap up my progress at a stopping point in order to produce my thesis and graduate.

Thank you for reading this far. I thoroughly enjoyed working on project, and I hoped you learned something along the way. If anyone out there ever wants to discuss this work, please feel free to contact me!