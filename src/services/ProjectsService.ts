import axios from "axios";
import Project from "../interfaces/Project";
import Service from "../interfaces/Service";

export default class ProjectsService implements Service<Project[]> {
  async get(): Promise<Project[]> {
    let res = await axios.get<Project[]>(
      "https://api.github.com/users/BenjaminHinchliff/repos?per_page=100"
    );
    const projects: Project[] = res.data;
    if (res.headers.next) {
      let links = this.parseLinks(res.headers.link);
      while (links.next) {
        res = await axios.get<Project[]>(links.next);
        projects.push(...res.data);
        links = this.parseLinks(res.headers.link);
      }
    }
    return projects
      .map(project => {
        project.htmlUrl = project["html_url"] as string;
        project.createdAt = project["created_at"] as string;
        delete project["html_url"];
        delete project["created_at"];
        return project;
      })
      .sort((a, b) => {
        return (
          new Date(b.createdAt as string).getTime() -
          new Date(a.createdAt as string).getTime()
        );
      });
  }

  private parseLinks(data: string): { [key: string]: string } {
    let arrData = data.split("link:");
    data = arrData.length == 2 ? arrData[1] : data;
    const parsedData: { [key: string]: string } = {};

    arrData = data.split(",");

    arrData.forEach(data => {
      const linkInfo = /<([^>]+)>;\s+rel="([^"]+)"/gi.exec(data);
      if (!linkInfo || linkInfo.length < 3) return;
      parsedData[linkInfo[2]] = linkInfo[1];
    });

    return parsedData;
  }
}
