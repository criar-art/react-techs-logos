import "./style.scss"
import techs from "./techs"

const getTech: any = (name: string) => {
  return techs.find((item) => item.name.toLowerCase() == name.toLowerCase())
};

const getTechs = (items: any) =>
  techs.filter((tech) =>
    items.find((item: any) => {
      return tech.name.toLowerCase() == item.toLowerCase()
    })
  )

const hiddenTechs = (items: any) =>
  techs.filter((item) => !items.includes(item.name.toLocaleLowerCase()))

function ReactTechsLogos(props: any) {
  const listTechs = props.list
    ? getTechs(props.list)
    : props.hiddenLogos
    ? hiddenTechs(props.hiddenLogos)
    : techs

  return (
    <>
      {props.name && getTech(props.name) && !props.list ? (
        <figure
          className={`${props.className ? props.className : ""} ${getTech(
            props.name
          ).name.toLocaleLowerCase()}`}
          style={{ width: props.size ? props.size : "100px" }}
        >
          {getTech(props.name).icon}
          <figcaption className={props.hiddenLabel ? "tooltip" : ""}>
            {getTech(props.name).name}
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
          className={`techs ${props.className ? props.className : ""}`}
        >
          {listTechs.map((tech) => (
            <figure
              className={`tech-container ${tech.name.toLocaleLowerCase()}`}
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

export default ReactTechsLogos
