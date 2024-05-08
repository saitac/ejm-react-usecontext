import Heading from "./components/Heading"
import Section from "./components/Section"

function App() {
 
  return (
    <Section level={1}>
      <Heading>Título</Heading>
      <Section level={2}>
        <Heading>Encabezado</Heading>
        <Heading>Encabezado</Heading>
        <Heading>Encabezado</Heading>
        <Section level={3}>
          <Heading>Sub-encabezado</Heading>
          <Heading>Sub-encabezado</Heading>
          <Heading>Sub-encabezado</Heading>
          <Section level={4}>
            <Heading>Sub-sub-encabezado</Heading>
            <Heading>Sub-sub-encabezado</Heading>
            <Heading>Sub-sub-encabezado</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  )
}

export default App
