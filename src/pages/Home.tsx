import { Heading1, BodyText } from '../components/common/Text';
import Button from '../components/common/Button';

export default function Home() {
  return (
    <div>
      <Heading1>퍼블리셔 지향의 포트폴리오</Heading1>
      <BodyText>코드와 디자인의 균형을 추구하는 프론트엔드 퍼블리셔입니다.</BodyText>
      <Button onClick={() => window.location.href = "/about"}>포트폴리오 보러가기</Button>
    </div>
  );
}
