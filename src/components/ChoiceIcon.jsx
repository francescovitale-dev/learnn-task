import { Scissors, FileText, Hand } from 'lucide-react';

const ChoiceIcon = ({ choice }) => {
  switch (choice) {
    case 'carta':
      return <FileText />;
    case 'forbice':
      return <Scissors />;
    case 'sasso':
      return <Hand />;
    default:
      return null;
  }
};

export default ChoiceIcon;
