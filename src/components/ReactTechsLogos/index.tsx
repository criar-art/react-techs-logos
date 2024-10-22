import "./style.scss";
import { Tech } from "./types";
import techs from "./techs";

const getTech: any = (name: string) => {
  return techs.find((item) => item.name.toLowerCase() == name.toLowerCase());
};

const getTechs = (items: string[]) => {
  const lowercasedArray = items.map((item: string) => item.toLowerCase());
  return techs.filter((tech: Tech) =>
    lowercasedArray.find((item: string) => {
      return tech.name.toLowerCase() == item.toLowerCase();
    })
  );
};

const hiddenTechs = (items: string[]) => {
  const lowercasedArray = items.map((item: string) => item.toLowerCase());
  return techs.filter(
    (item: Tech) => !lowercasedArray.includes(item.name.toLocaleLowerCase())
  );
};

function ReactTechsLogos(props: any) {
  const listTechs = props.list
    ? getTechs(props.list)
    : props.hiddenLogos
    ? hiddenTechs(props.hiddenLogos)
    : techs;

  return (
    <>
      {props.raw ? (
        props.name && getTech(props.name) && !props.list ? (
          getTech(props.name)?.icon
        ) : (
          listTechs.map((tech) => tech.icon)
        )
      ) : props.name && getTech(props.name) && !props.list ? (
        <figure
          className={`tech-container ${props.className || ""} ${getTech(
            props.name
          )?.name.toLowerCase()}`}
          style={{ width: props.size || "100px" }}
        >
          {getTech(props.name)?.icon}
          <figcaption className={props.hiddenLabel ? "tooltip" : ""}>
            {getTech(props.name)?.name}
          </figcaption>
        </figure>
      ) : (
        <section
          data-testid={
            props.list
              ? "techs-container-list"
              : props.hiddenLogos
              ? "techs-container-hiddenLogos"
              : "techs-container"
          }
          className={`techs ${props.className || ""}`}
        >
          {listTechs.map((tech) => (
            <figure
              className={`tech-container ${tech.name.toLowerCase()}`}
              key={tech.name}
            >
              {tech.icon}
              <figcaption className={props.hiddenLabel ? "tooltip" : ""}>
                {tech.name}
              </figcaption>
            </figure>
          ))}
        </section>
      )}
    </>
  );
}

export default ReactTechsLogos;
