import React, { useState } from "react";
import Title from "../../components/dashboard/Title";
import Card from "../../components/dashboard/ExperienceCard";
import Input from "../../components/dashboard/ExperienceInput";

const Experience = () => {
  const [formOpen, setFormOpen] = useState(false);

  const formToggle = () => {
    document.body.style.overflow = formOpen ? "unset" : "hidden";
    setFormOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <Title title="Experiences" onAddBtnClick={formToggle} />
      <section className="grid md:grid-cols-3 lg:grid-cols-5 gap-3 p-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
      <Input formToggleValue={formOpen} onCancelBtnClick={formToggle} />
    </>
  );
};

export default Experience;
