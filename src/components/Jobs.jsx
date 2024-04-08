import Job from "./Job";

const Jobs = () => {
  return (
    <div class="container-main">
      <Job
        className="red"
        title="Video"
        contractType="Stage"
        country="France"
        city="Asnières"
      />
      <Job
        className="green"
        title="Vidéo"
        contractType="Stage"
        country="France"
        city="Asnières"
      />
      <Job
        className="yellow"
        title="Vidéo"
        contractType="Stage"
        country="France"
        city="Asnières"
      />
    </div>
  );
};
export default Jobs;
