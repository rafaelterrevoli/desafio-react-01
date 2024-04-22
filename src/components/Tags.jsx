import Badge from 'react-bootstrap/Badge';
export default function Tags({bg, raza}) {
  return (
    <div>
        <Badge bg={bg}>{raza}</Badge>
    </div>
  )
}
