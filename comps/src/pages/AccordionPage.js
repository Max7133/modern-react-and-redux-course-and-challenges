import Accordion from '../components/Accordion';

function AccordionPage() {
  // Example Items Array Prop (Array of Object where each Object has a Label and some Content)
  const items = [
    {
      id: 'dsfv',
      label: 'Temporary label text 1',
      content: 'Temporary content text which should be longer than label',
    },
    {
      id: 'sdfg',
      label: 'Temporary label text 2',
      content: 'Temporary content text which should be longer than label',
    },
    {
      id: 'vdbd',
      label: 'Temporary label text 3',
      content: 'Temporary content text which should be longer than label',
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
