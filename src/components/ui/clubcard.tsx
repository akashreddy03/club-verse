import { Card, CardContent } from "./card";

const ClubCard = ({ name }: { name: string }) => {
  return (
    <Card className="mb-4">
      <CardContent>
        <div className="mt-4">
          <p>{name}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClubCard;
