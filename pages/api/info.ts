// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import MOCK_EXPERIENCES from "../../mocks/experiences.json";
import Projects from "../../mocks/projects.json";
import technologies from "../../mocks/technologies.json";
import { Thechnologie } from "../../src/sections/About/types";
import { Project } from "../../src/sections/Portfolio/types";

export interface Location {
  state?: string;
  city?: string;
}

export interface Experience {
  index?: number;
  code?: string;
  company?: string;
  href?: string;
  location?: Location;
  description?: string;
  dateStart?: string;
  dateEnd?: string;
  technologies: Array<string>;
}

export interface Response {
  experiences?: Array<Experience>;
  projects?: Array<Project>;
  technologies?: Array<Thechnologie>;
}

const response: Response = {
  experiences: MOCK_EXPERIENCES.experiences,
  projects: Projects.projects,
  technologies: technologies.thecnologies,
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  res.status(200).json(response);
}
