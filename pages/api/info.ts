// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Experiences from "../../mocks/experiences.json";
import Projects from "../../mocks/projects.json";
import technologies from "../../mocks/technologies.json";
import { Thechnologie } from "../../src/sections/About/types";
import { Project } from "../../src/sections/Projects/types";

interface Data {
  experiences: Array<Project>;
  projects: Array<Project>;
  technologies: Array<Thechnologie>;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res
    .status(200)
    .json({
      experiences: Experiences.experiences,
      projects: Projects.projects,
      technologies: technologies.thecnologies,
    });
}
