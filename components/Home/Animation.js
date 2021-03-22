import styled from "styled-components";
import Link from "next/link";

const Svg = styled.svg`
  position: absolute;
  background: "black";
  height: 800px;
  width: 100%;
  @media (max-width: 566px) {
    z-index: 99;
  }
`;

const MainHeadline = styled.p`
  font-size: 30px;
  position: absolute;
  top: 300px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  white-space: nowrap;
  @media (max-width: 700px) {
    font-size: 26px;
  }

  @media (max-width: 566px) {
    font-size: 22px;
    top: 120px;
  }
`;

const SubHeadline = styled.p`
  font-size: 20px;
  position: absolute;
  top: 370px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  white-space: nowrap;
  @media (max-width: 700px) {
    font-size: 20px;
  }

  @media (max-width: 566px) {
    font-size: 16px;
    top: 180px;
  }
`;

const FrontPageContainer = styled.div`
  position: relative;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  width: 100%;
  min-height: 100vh;
  font-family: "Roboto", sans-serif;
  @media (max-height: 859px) {
    top: 50px;
  }
  @media (max-height: 712px) {
    top: 0px;
  }
`;

const FrontPageButton = styled.button`
  font-size: 18px;
  position: absolute;
  top: 440px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  background: #651e3e;
  border: none;
  padding: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &:hover {
    background: rgba(219, 100, 0, 1);
  }
  font-family: "Roboto", sans-serif;

  @media (max-width: 566px) {
    font-size: 16px;
    top: 230px;
    z-index: 99;
  }
`;
const Circle = styled.circle`
  @media (max-width: 566px) {
    display: none;
  }
`;

const Path = styled.path`
  @media (max-width: 566px) {
    display: none;
  }
`;

const Gpath = styled.g`
  @media (max-width: 566px) {
    display: none;
  }
`;

const MobilePolygon = styled.div`
  clip-path: polygon(0% 0%, 100% 0, 100% 64%, 50% 99%, 0 64%);
  height: 600px;
  width: 100%;
  background: #051e3e;
  position: absolute;
  top: -100px;
  left: 50%;
  z-index: -99;
  transform: translateX(-50%);
  visibility: hidden;
  @media (max-width: 566px) {
    visibility: visible;
  }
`;

function Animation() {
  return (
    <FrontPageContainer>
      <Svg viewBox="0 0 160 160" width="160" height="160">
        <Circle cx="80" cy="80" r="50" fill="#051e3e" />
        <Gpath transform=" matrix(0.866, -0.4, 0.25, 0.433, 80, 80)">
          <path
            className="leaf-svg"
            d="M46.8545 71.553C35.9317 81.3468 27.9845 78.1659 25.6723 76.9212L13.3502 92.2876C12.8312 92.9349 12.2162 93.1998 11.8726 92.9243C11.5294 92.6491 11.654 91.9909 12.173 91.3436L24.495 75.9772C22.7009 74.0873 17.9458 66.9256 25.1331 54.135C34.1066 38.2077 51.1572 23.8938 77.3434 10.3706L78.602 9.70827L78.229 11.0807C70.7144 39.5847 60.4516 59.3333 46.8545 71.553ZM51.2943 46.8615C51.2698 46.9932 51.3496 47.0573 51.4724 47.0044L56.4627 44.8542C56.5228 44.8289 56.5846 44.7784 56.6348 44.7159L64.5965 34.7871L65.5452 34.3789C65.5437 34.9094 65.9131 35.1584 66.4843 34.9112C67.1357 34.631 67.7706 33.8393 67.9018 33.1434C68.035 32.4478 67.6142 32.1103 66.9628 32.3904C66.3918 32.6365 65.8535 33.2766 65.6357 33.9002L64.5946 34.3483C64.5354 34.3743 64.4736 34.4247 64.4234 34.4873L56.4617 44.4161L51.5633 46.5261C51.4405 46.579 51.3199 46.7294 51.2943 46.8615ZM52.664 58.1963L46.3881 53.1637C46.3181 53.1076 46.1776 53.167 46.0712 53.2997C45.9662 53.4307 45.9373 53.5825 46.0073 53.6386L52.2832 58.6712C51.8792 59.2954 51.799 59.9461 52.1224 60.2055C52.489 60.4994 53.2345 60.1781 53.7881 59.4878C54.3417 58.7974 54.494 57.999 54.1274 57.7051C53.8042 57.4445 53.1856 57.6662 52.664 58.1963ZM54.8854 50.5854C54.8522 50.5587 54.7996 50.5582 54.7399 50.5839L50.0582 52.6011L48.099 51.0301C48.029 50.974 47.8865 51.0359 47.7821 51.1661C47.6771 51.2971 47.6482 51.4488 47.7182 51.505L49.7299 53.1181C49.7626 53.1444 49.8146 53.1457 49.875 53.1192L54.5567 51.102L56.5181 52.6748C56.1152 53.2986 56.0336 53.951 56.3566 54.21C56.7232 54.5039 57.4698 54.1822 58.0228 53.4926C58.5764 52.8023 58.7282 52.0035 58.3616 51.7096C58.0391 51.4509 57.4202 51.6711 56.8989 52.1999L54.8854 50.5854ZM39.9183 54.8508C39.9428 54.7191 39.8629 54.6551 39.7397 54.7076L32.2625 57.9304L30.3253 56.377C30.7293 55.7527 30.8113 55.1008 30.4874 54.841C30.1209 54.5471 29.3735 54.8697 28.8213 55.5583C28.267 56.2496 28.1159 57.0475 28.4824 57.3414C28.8054 57.6004 29.4238 57.3799 29.9451 56.8511L31.9348 58.4466C31.9676 58.4728 32.0213 58.4729 32.0799 58.4476L39.6486 55.1871C39.7731 55.1329 39.8931 54.9833 39.9183 54.8508ZM35.0697 46.5298C35.3932 46.7892 36.0111 46.5683 36.5324 46.0395L42.8043 51.0688C42.8738 51.1245 43.0157 51.0634 43.1208 50.9324C43.2271 50.7998 43.2546 50.6497 43.1851 50.5939L36.9132 45.5646C37.3173 44.9403 37.3982 44.2888 37.0747 44.0294C36.7077 43.7352 35.9615 44.0572 35.4079 44.7476C34.8543 45.438 34.7027 46.2355 35.0697 46.5298ZM45.0668 48.2473L43.1978 46.7486L44.7424 38.6213C44.7538 38.5583 44.7418 38.5071 44.7091 38.4808L44.09 37.9843C44.4933 37.3609 44.5749 36.7086 44.2514 36.4492C43.8849 36.1553 43.1387 36.4774 42.5858 37.1669C42.0322 37.8573 41.8806 38.6548 42.2471 38.9487C42.5706 39.2081 43.1885 38.9872 43.7098 38.4584L44.2765 38.9128L42.7319 47.04C42.7204 47.103 42.7317 47.1551 42.7649 47.1818L44.686 48.7222C44.7555 48.778 44.8981 48.716 45.0024 48.5859C45.1075 48.4549 45.1363 48.3031 45.0668 48.2473ZM55.4966 28.9881L55.0991 31.0795L49.2847 38.3305C49.2345 38.3931 49.1988 38.4643 49.1878 38.5277L48.0915 44.2933C48.067 44.425 48.1468 44.489 48.2701 44.4365C48.3939 44.3831 48.5145 44.2327 48.5391 44.101L49.6159 38.435L55.4303 31.1841C55.4804 31.1215 55.5158 31.0499 55.5279 30.9861L55.9442 28.7958C56.5056 28.4477 57.0134 27.7831 57.1291 27.172C57.2619 26.476 56.841 26.1385 56.1905 26.4194C55.5403 26.699 54.9047 27.4916 54.773 28.1871C54.6558 28.7984 54.9784 29.1057 55.4966 28.9881ZM54.6462 35.2174C55.2236 35.6804 56.4032 35.1727 57.2759 34.0843C58.0504 33.1185 58.322 32.0187 57.9703 31.459L65.6115 21.9299L70.011 20.0349L65.9969 25.0407L55.7619 37.8045C55.1391 37.5828 54.1246 38.0868 53.3502 39.0526C52.4781 40.1402 52.2381 41.4028 52.8155 41.8657C53.3929 42.3287 54.5732 41.8202 55.4453 40.7327C56.2204 39.766 56.4925 38.6666 56.1401 38.1077L65.6847 26.205L64.8073 30.8216L60.4849 36.2119C59.8622 35.9902 58.8481 36.4946 58.0736 37.4604C57.2009 38.5488 56.9616 39.8105 57.5395 40.2739C58.1168 40.7369 59.296 40.2288 60.1687 39.1405C60.9432 38.1746 61.2153 37.0752 60.8636 36.5155L65.3038 30.9782C65.379 30.8844 65.4327 30.7761 65.4501 30.6818L66.493 25.1969L75.9692 13.3795L76.7748 12.3748C76.9327 12.1779 76.976 11.9502 76.8715 11.8664C76.7669 11.7826 76.5545 11.8747 76.3966 12.0716L75.591 13.0763L70.8194 19.0268L65.6094 21.2716C65.5216 21.3094 65.4276 21.3853 65.3523 21.4791L57.5925 31.1561C56.9698 30.9344 55.9553 31.4385 55.1808 32.4043C54.3081 33.4927 54.0688 34.7544 54.6462 35.2174ZM54.3601 46.4863C53.3352 46.9279 52.331 48.1802 52.1227 49.2765C51.9136 50.3737 52.5785 50.9068 53.6045 50.4648C54.5145 50.0727 55.4046 49.0427 55.7399 48.0481L58.516 46.852C58.6046 46.8133 58.6984 46.7386 58.7736 46.6448L65.2378 38.5835L67.7061 37.5194C67.8919 37.4394 68.0728 37.2137 68.1099 37.0158C68.1481 36.8174 68.0279 36.721 67.8421 36.801L65.2342 37.9252C65.1463 37.9631 65.0518 38.0386 64.9766 38.1324L58.5124 46.1938L55.8759 47.3298C55.8929 46.4729 55.2701 46.0942 54.3601 46.4863ZM46.6932 31.9444L47.8704 32.8884L46.5404 39.8896C45.6425 40.433 44.83 41.5252 44.6455 42.499C44.4364 43.5962 45.1008 44.129 46.1268 43.6869C47.1517 43.2454 48.1557 41.9943 48.364 40.8979C48.3114 41.1723 48.2601 41.4449 48.3642 40.8967C48.3903 40.7594 48.4066 40.6739 48.4155 40.6269C48.4045 40.6847 48.3846 40.7895 48.3645 40.8955C48.5484 39.9226 48.0443 39.3976 47.2116 39.6004L48.5712 32.4493C48.5893 32.3541 48.5709 32.2769 48.5215 32.2373L47.2658 31.2304C47.1617 31.1469 46.9484 31.2383 46.7905 31.4352C46.6326 31.632 46.5887 31.8606 46.6932 31.9444ZM34.7106 54.54L35.5062 54.1978C35.4905 55.053 36.1122 55.4321 37.022 55.0413C38.048 54.5992 39.0529 53.346 39.2608 52.2494C39.4687 51.1527 38.8043 50.6199 37.7794 51.0615C36.869 51.4532 35.9782 52.4841 35.6433 53.4789L34.9867 53.7618L31.508 50.9723C31.4578 50.9321 31.3782 50.9321 31.2903 50.9699L27.5355 52.5878C27.3492 52.6675 27.1676 52.8939 27.131 53.0922C27.0934 53.2898 27.2132 53.3859 27.3979 53.3063L31.0147 51.7485L34.4929 54.5376C34.5423 54.5772 34.6223 54.5775 34.7106 54.54ZM37.7787 51.0623C36.7534 51.5035 38.8043 50.6199 37.7787 51.0623ZM49.131 67.235L47.1552 65.6507L48.3079 59.5804C48.3266 59.4844 48.3073 59.4092 48.2571 59.3689L47.5947 58.8364C48.2412 57.8471 48.3761 56.8057 47.8629 56.3941C47.285 55.9308 46.1052 56.4397 45.2331 57.5272C44.3604 58.6155 44.1193 59.8786 44.6971 60.342C45.2104 60.7535 46.1976 60.3956 47.0234 59.5487L47.6085 60.0178L46.4541 66.0894C46.4373 66.1829 46.455 66.261 46.5048 66.3009L48.5591 67.9482C48.6637 68.032 48.8765 67.9403 49.0344 67.7434C49.1923 67.5466 49.2356 67.3188 49.131 67.235ZM44.4493 65.9715L44.8667 63.7753L42.3041 61.7204L43.1215 57.4194C43.1464 57.2881 43.0666 57.2241 42.9434 57.2766C42.8199 57.3303 42.7 57.4799 42.6737 57.6129L41.8192 62.1118L44.3818 64.1667L44.0017 66.1638C43.4403 66.5119 42.9324 67.1765 42.8168 67.7877C42.6845 68.484 43.1048 68.8211 43.7558 68.5406C44.4056 68.2606 45.0412 67.468 45.174 66.772C45.2889 66.1617 44.9672 65.8551 44.4493 65.9715ZM37.6903 68.9595C37.1775 68.5483 36.1921 68.9049 35.3663 69.7518L34.242 68.8503C34.1922 68.8104 34.1139 68.8087 34.0243 68.8479L30.1523 70.5162L34.2965 65.3481C34.965 65.6037 36.0682 65.0626 36.9112 64.0114C37.8496 62.8411 38.1081 61.4809 37.4863 60.9823C36.8641 60.4833 35.593 61.0315 34.6545 62.2018C33.8123 63.2522 33.5231 64.4475 33.9178 65.0445L29.0832 71.0736L28.6916 71.562L30.2488 66.0286L32.4198 63.3212C32.4374 63.2993 32.4499 63.2745 32.4646 63.2516C33.4665 62.6889 34.392 61.4749 34.597 60.3938C34.8213 59.2132 34.1058 58.6394 33.0016 59.1146C31.8986 59.5893 30.8172 60.9379 30.5928 62.1186C30.4103 63.0788 30.8547 63.6267 31.6181 63.5461L29.769 65.8521C29.7046 65.9324 29.6559 66.0225 29.6327 66.1066L27.7768 72.7028L26.6405 74.1198L26.0401 74.8685C25.8829 75.0645 25.8392 75.2919 25.9437 75.3757C26.0478 75.4592 26.2605 75.3687 26.4183 75.1718L27.0187 74.4231L29.3442 71.5231L33.7484 69.6249L34.7942 70.4634C34.1469 71.4536 34.0109 72.4955 34.5242 72.907C35.102 73.3704 36.2825 72.8606 37.1539 71.7739C38.0284 70.6843 38.2686 69.4232 37.6903 68.9595ZM34.5981 60.3934C34.822 59.2123 34.3737 61.574 34.5981 60.3934Z"
            fill="#DB6400"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 0 0"
              to="0 0 0"
              dur="6s"
              repeatCount="indefinite"
            />
          </path>
        </Gpath>
        <Path
          d="M 50,0 A 50,50 0 0,0 -50,0Z"
          transform="matrix(0.866, -0.5, 0.5, 0.866, 80, 80)"
          fill="#051e3e"
        />
      </Svg>
      <MobilePolygon></MobilePolygon>
      <MainHeadline>Trond Fuglseth Spjelkavik</MainHeadline>
      <SubHeadline>Front-End Developer student</SubHeadline>
      <Link href="/projects">
        <FrontPageButton aria-label="View my works">
          View my works
        </FrontPageButton>
      </Link>
    </FrontPageContainer>
  );
}

export default Animation;
