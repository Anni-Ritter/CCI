import "../style/styleScreen.css";
import React from 'react';
import Logo from "../assets/3.svg";
import { SubscriptionInput } from "./SubscriptionInput";
import { SubscriptionRadio } from "./SubscriptionRadio";

export const SubscriptionMain = (): JSX.Element => {

    return (
        <div className="subscriptionContainer">
            <div className="spaceBetweenContainer">
                <img src={Logo} width={200} />
                <div className="calendarTitleContainer">
                    <div>Подпишитесь / S'abonner</div>
                    <div style={{marginTop: '40px'}}>
                        Подпишитесь на рассылки Франко-российской ТППS<br/>
                        'abonner aux emailings de la CCI France Russie
                    </div>
                </div>
                <div></div>
            </div>
            <div className="mainSubscriptionContainer">
                <div className="subSubscriptionContainer">
                    <SubscriptionInput
                        title="Email*"
                        placeholder="Введите ваш email"/>
                    <div className="mainSubscriptionContainer">
                            <div className="calendarInputTitle">Язык*</div>
                            <div className="subSubscriptionContainer">
                            <SubscriptionRadio
                                title="Russian"/>
                            <SubscriptionRadio
                                title="French"/>
                            <SubscriptionRadio
                                title="Russian and French"/>
                        </div>
                    </div>
                </div>
                <div className="subSubscriptionContainer">
                    <SubscriptionInput
                        title="Prenom - Имя (На Латинице)*"
                        placeholder="Введите ваш email"/>
                    <SubscriptionInput
                        title="Nom - Фамилия (На Латинице)*"
                        placeholder="Введите ваш email"/>
                </div>
                <div className="subSubscriptionContainer">
                    <SubscriptionInput
                        title="Имя - Prenom (En Cyrillique)"
                        placeholder="Введите ваш email"/>
                    <SubscriptionInput
                        title="Фамилия - Nom (En Cyrillique)"
                        placeholder="Введите ваш email"/>
                </div>
                <div className="subSubscriptionContainer">
                    <SubscriptionInput
                        title="Компания - Entreprise*"
                        placeholder="Введите ваш email"/>
                    <SubscriptionInput
                        title="Должность - Poste*"
                        placeholder="Введите ваш email"/>
                </div>
            </div>
            <div className="mainSubscriptionContainer">
                <div className="calendarInputTitle">Локация</div>
                <div className="subSubscriptionContainer">
                    <SubscriptionRadio
                        title="В России / En Russie"/>
                    <SubscriptionRadio
                        title="Во Франции / En France"/>
                    <SubscriptionRadio
                        title="Другое / Autre"/>
                </div>
            </div>
            <div style={{paddingTop: 40}}>
                <svg width="314" height="48" viewBox="0 0 314 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.310303" y="0.494141" width="312.975" height="47" rx="10" fill="white"/>
                    <path d="M276.522 35.7441L295.272 35.7441C296.307 35.7441 297.147 34.9047 297.147 33.8691L297.147 15.1191C297.147 14.0836 296.307 13.2441 295.272 13.2441L276.522 13.2441C275.486 13.2441 274.647 14.0836 274.647 15.1191L274.647 33.8691C274.647 34.9047 275.486 35.7441 276.522 35.7441Z" stroke="#040D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M282.772 18.2441L289.022 24.4941L282.772 30.7441" stroke="#040D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.027 29.4941V15.4941H25.287V29.4941H23.047V17.5441H16.267V29.4941H14.027ZM33.1494 29.7941C32.116 29.7941 31.1927 29.5575 30.3794 29.0841C29.5727 28.6041 28.9394 27.9675 28.4794 27.1741C28.0194 26.3741 27.7894 25.4975 27.7894 24.5441C27.7894 23.8375 27.9194 23.1708 28.1794 22.5441C28.446 21.9108 28.8194 21.3508 29.2994 20.8641C29.786 20.3775 30.356 19.9941 31.0094 19.7141C31.6627 19.4341 32.3794 19.2941 33.1594 19.2941C34.1927 19.2941 35.1127 19.5341 35.9194 20.0141C36.7327 20.4875 37.3694 21.1241 37.8294 21.9241C38.2894 22.7175 38.5194 23.5908 38.5194 24.5441C38.5194 25.2441 38.386 25.9108 38.1194 26.5441C37.8594 27.1775 37.4894 27.7375 37.0094 28.2241C36.5294 28.7108 35.9627 29.0941 35.3094 29.3741C34.656 29.6541 33.936 29.7941 33.1494 29.7941ZM33.1494 27.8441C33.7627 27.8441 34.306 27.7108 34.7794 27.4441C35.2594 27.1708 35.636 26.7875 35.9094 26.2941C36.1827 25.8008 36.3194 25.2175 36.3194 24.5441C36.3194 23.8708 36.1827 23.2875 35.9094 22.7941C35.636 22.2941 35.2594 21.9108 34.7794 21.6441C34.306 21.3775 33.7627 21.2441 33.1494 21.2441C32.536 21.2441 31.9894 21.3775 31.5094 21.6441C31.036 21.9108 30.6627 22.2941 30.3894 22.7941C30.1227 23.2875 29.9894 23.8708 29.9894 24.5441C29.9894 25.2175 30.126 25.8008 30.3994 26.2941C30.6727 26.7875 31.046 27.1708 31.5194 27.4441C31.9994 27.7108 32.5427 27.8441 33.1494 27.8441ZM47.9192 29.4941V21.4141H43.9192V22.7241C43.9192 23.6241 43.8659 24.4375 43.7592 25.1641C43.6526 25.8908 43.4626 26.5308 43.1892 27.0841C42.9159 27.6308 42.5326 28.0841 42.0392 28.4441C41.5526 28.8041 40.9292 29.0675 40.1692 29.2341L39.6292 27.7441C40.2626 27.5908 40.7392 27.3041 41.0592 26.8841C41.3792 26.4641 41.5926 25.9108 41.6992 25.2241C41.8126 24.5308 41.8692 23.6975 41.8692 22.7241V19.5941H50.1192V29.4941H47.9192ZM39.6292 32.4941V27.7441L40.9892 27.8841L41.3292 27.6741H52.1092V32.4941H50.0992V29.4941H41.6392V32.4941H39.6292ZM54.0495 29.4941V19.5941H63.3995V29.4941H61.1995V21.4141H56.2495V29.4941H54.0495ZM66.4519 29.4941V19.5941H68.5819V26.2741L73.9519 19.5941H75.8719V29.4941H73.7519V22.7341L68.3319 29.4941H66.4519ZM83.4723 29.7941C82.4323 29.7941 81.5057 29.5675 80.6923 29.1141C79.879 28.6541 79.239 28.0308 78.7723 27.2441C78.3123 26.4508 78.0823 25.5508 78.0823 24.5441C78.0823 23.7841 78.219 23.0875 78.4923 22.4541C78.7657 21.8141 79.1523 21.2575 79.6523 20.7841C80.1523 20.3108 80.739 19.9441 81.4123 19.6841C82.0923 19.4241 82.829 19.2941 83.6223 19.2941C84.289 19.2941 84.9057 19.3841 85.4723 19.5641C86.0457 19.7375 86.5723 20.0075 87.0523 20.3741L85.9923 22.0541C85.6857 21.7808 85.3323 21.5775 84.9323 21.4441C84.539 21.3108 84.119 21.2441 83.6723 21.2441C82.979 21.2441 82.3823 21.3741 81.8823 21.6341C81.3823 21.8941 80.9923 22.2708 80.7123 22.7641C80.439 23.2508 80.3023 23.8408 80.3023 24.5341C80.3023 25.5675 80.6023 26.3775 81.2023 26.9641C81.809 27.5508 82.6323 27.8441 83.6723 27.8441C84.1657 27.8441 84.6323 27.7541 85.0723 27.5741C85.5123 27.3875 85.879 27.1441 86.1723 26.8441L87.2223 28.5141C86.6957 28.9141 86.109 29.2275 85.4623 29.4541C84.8157 29.6808 84.1523 29.7941 83.4723 29.7941ZM91.9948 29.7941C91.3082 29.7941 90.7048 29.6675 90.1848 29.4141C89.6648 29.1541 89.2582 28.7908 88.9648 28.3241C88.6782 27.8508 88.5348 27.2941 88.5348 26.6541C88.5348 26.1141 88.6715 25.6275 88.9448 25.1941C89.2182 24.7541 89.6415 24.3908 90.2148 24.1041C90.7948 23.8175 91.5382 23.6275 92.4448 23.5341C93.3515 23.4341 94.4415 23.4475 95.7148 23.5741L95.7548 25.0941C94.8482 24.9675 94.0682 24.9141 93.4148 24.9341C92.7615 24.9541 92.2248 25.0375 91.8048 25.1841C91.3915 25.3241 91.0848 25.5141 90.8848 25.7541C90.6915 25.9875 90.5948 26.2575 90.5948 26.5641C90.5948 27.0441 90.7648 27.4141 91.1048 27.6741C91.4515 27.9341 91.9248 28.0641 92.5248 28.0641C93.0382 28.0641 93.4982 27.9708 93.9048 27.7841C94.3115 27.5975 94.6315 27.3341 94.8648 26.9941C95.1048 26.6541 95.2248 26.2541 95.2248 25.7941V23.1641C95.2248 22.7241 95.1315 22.3441 94.9448 22.0241C94.7582 21.6975 94.4748 21.4441 94.0948 21.2641C93.7148 21.0841 93.2415 20.9941 92.6748 20.9941C92.1548 20.9941 91.6415 21.0741 91.1348 21.2341C90.6282 21.3875 90.1448 21.6308 89.6848 21.9641L89.0648 20.3441C89.6848 19.9241 90.3315 19.6275 91.0048 19.4541C91.6782 19.2808 92.3248 19.1941 92.9448 19.1941C93.8648 19.1941 94.6515 19.3408 95.3048 19.6341C95.9648 19.9208 96.4715 20.3575 96.8248 20.9441C97.1782 21.5241 97.3548 22.2575 97.3548 23.1441V29.4941H95.3748V28.3241C95.0415 28.7975 94.5782 29.1608 93.9848 29.4141C93.3915 29.6675 92.7282 29.7941 91.9948 29.7941ZM102.138 29.4941V21.4141H98.8884V19.5941H107.598V21.4141H104.338V29.4941H102.138ZM109.616 29.4941V19.5941H111.816V27.8241H113.706C114.426 27.8241 114.969 27.6841 115.336 27.4041C115.703 27.1241 115.886 26.7075 115.886 26.1541C115.886 25.6075 115.716 25.1875 115.376 24.8941C115.036 24.6008 114.536 24.4541 113.876 24.4541H111.516V22.8041H114.046C115.326 22.8041 116.333 23.0908 117.066 23.6641C117.799 24.2375 118.166 25.0675 118.166 26.1541C118.166 26.8541 117.989 27.4541 117.636 27.9541C117.283 28.4475 116.786 28.8275 116.146 29.0941C115.513 29.3608 114.769 29.4941 113.916 29.4941H109.616ZM125.015 29.7941C123.975 29.7941 123.049 29.5675 122.235 29.1141C121.422 28.6541 120.782 28.0308 120.315 27.2441C119.855 26.4508 119.625 25.5508 119.625 24.5441C119.625 23.7841 119.762 23.0875 120.035 22.4541C120.309 21.8141 120.695 21.2575 121.195 20.7841C121.695 20.3108 122.282 19.9441 122.955 19.6841C123.635 19.4241 124.372 19.2941 125.165 19.2941C125.832 19.2941 126.449 19.3841 127.015 19.5641C127.589 19.7375 128.115 20.0075 128.595 20.3741L127.535 22.0541C127.229 21.7808 126.875 21.5775 126.475 21.4441C126.082 21.3108 125.662 21.2441 125.215 21.2441C124.522 21.2441 123.925 21.3741 123.425 21.6341C122.925 21.8941 122.535 22.2708 122.255 22.7641C121.982 23.2508 121.845 23.8408 121.845 24.5341C121.845 25.5675 122.145 26.3775 122.745 26.9641C123.352 27.5508 124.175 27.8441 125.215 27.8441C125.709 27.8441 126.175 27.7541 126.615 27.5741C127.055 27.3875 127.422 27.1441 127.715 26.8441L128.765 28.5141C128.239 28.9141 127.652 29.2275 127.005 29.4541C126.359 29.6808 125.695 29.7941 125.015 29.7941ZM130.098 29.4941L133.898 24.4241L134.378 25.8441C133.558 25.8508 132.858 25.7308 132.278 25.4841C131.698 25.2308 131.254 24.8775 130.948 24.4241C130.648 23.9641 130.498 23.4208 130.498 22.7941C130.498 22.1208 130.668 21.5475 131.008 21.0741C131.348 20.5941 131.828 20.2275 132.448 19.9741C133.068 19.7208 133.794 19.5941 134.628 19.5941H138.898V29.4941H136.778V21.2641H134.848C134.141 21.2641 133.604 21.3875 133.238 21.6341C132.878 21.8808 132.698 22.2508 132.698 22.7441C132.698 23.2241 132.864 23.5975 133.198 23.8641C133.538 24.1241 134.028 24.2541 134.668 24.2541H137.058V25.8541H135.318L132.608 29.4941H130.098ZM147.182 31.7941L145.342 31.0741L152.622 13.3941L154.452 14.1141L147.182 31.7941ZM165.735 29.7941C164.769 29.7941 163.822 29.6575 162.895 29.3841C161.975 29.1041 161.199 28.7041 160.565 28.1841L161.665 26.4741C161.999 26.7608 162.385 27.0075 162.825 27.2141C163.272 27.4208 163.745 27.5808 164.245 27.6941C164.745 27.8008 165.245 27.8541 165.745 27.8541C166.659 27.8541 167.395 27.6808 167.955 27.3341C168.522 26.9875 168.805 26.4808 168.805 25.8141C168.805 25.3141 168.612 24.8908 168.225 24.5441C167.845 24.1975 167.139 23.8775 166.105 23.5841L164.665 23.1641C163.345 22.7841 162.382 22.2808 161.775 21.6541C161.175 21.0275 160.875 20.2475 160.875 19.3141C160.875 18.6941 160.999 18.1341 161.245 17.6341C161.499 17.1341 161.852 16.7008 162.305 16.3341C162.765 15.9675 163.305 15.6875 163.925 15.4941C164.545 15.3008 165.225 15.2041 165.965 15.2041C166.905 15.2041 167.779 15.3408 168.585 15.6141C169.392 15.8875 170.059 16.2541 170.585 16.7141L169.445 18.3741C169.159 18.1141 168.822 17.8908 168.435 17.7041C168.055 17.5175 167.645 17.3741 167.205 17.2741C166.765 17.1741 166.319 17.1241 165.865 17.1241C165.305 17.1241 164.809 17.2075 164.375 17.3741C163.949 17.5341 163.615 17.7675 163.375 18.0741C163.135 18.3808 163.015 18.7541 163.015 19.1941C163.015 19.5141 163.095 19.7941 163.255 20.0341C163.415 20.2741 163.689 20.4941 164.075 20.6941C164.469 20.8875 165.009 21.0841 165.695 21.2841L167.215 21.7341C168.509 22.1141 169.455 22.6108 170.055 23.2241C170.655 23.8308 170.955 24.6208 170.955 25.5941C170.955 26.4275 170.749 27.1608 170.335 27.7941C169.929 28.4208 169.335 28.9108 168.555 29.2641C167.775 29.6175 166.835 29.7941 165.735 29.7941ZM173.384 20.6641L173.174 15.4941H175.214L175.004 20.6641H173.384ZM180.745 29.7941C180.058 29.7941 179.455 29.6675 178.935 29.4141C178.415 29.1541 178.008 28.7908 177.715 28.3241C177.428 27.8508 177.285 27.2941 177.285 26.6541C177.285 26.1141 177.422 25.6275 177.695 25.1941C177.968 24.7541 178.392 24.3908 178.965 24.1041C179.545 23.8175 180.288 23.6275 181.195 23.5341C182.102 23.4341 183.192 23.4475 184.465 23.5741L184.505 25.0941C183.598 24.9675 182.818 24.9141 182.165 24.9341C181.512 24.9541 180.975 25.0375 180.555 25.1841C180.142 25.3241 179.835 25.5141 179.635 25.7541C179.442 25.9875 179.345 26.2575 179.345 26.5641C179.345 27.0441 179.515 27.4141 179.855 27.6741C180.202 27.9341 180.675 28.0641 181.275 28.0641C181.788 28.0641 182.248 27.9708 182.655 27.7841C183.062 27.5975 183.382 27.3341 183.615 26.9941C183.855 26.6541 183.975 26.2541 183.975 25.7941V23.1641C183.975 22.7241 183.882 22.3441 183.695 22.0241C183.508 21.6975 183.225 21.4441 182.845 21.2641C182.465 21.0841 181.992 20.9941 181.425 20.9941C180.905 20.9941 180.392 21.0741 179.885 21.2341C179.378 21.3875 178.895 21.6308 178.435 21.9641L177.815 20.3441C178.435 19.9241 179.082 19.6275 179.755 19.4541C180.428 19.2808 181.075 19.1941 181.695 19.1941C182.615 19.1941 183.402 19.3408 184.055 19.6341C184.715 19.9208 185.222 20.3575 185.575 20.9441C185.928 21.5241 186.105 22.2575 186.105 23.1441V29.4941H184.125V28.3241C183.792 28.7975 183.328 29.1608 182.735 29.4141C182.142 29.6675 181.478 29.7941 180.745 29.7941ZM194.79 29.7941C194.13 29.7941 193.533 29.6975 193 29.5041C192.473 29.3108 192.017 29.0441 191.63 28.7041C191.243 28.3575 190.93 27.9608 190.69 27.5141L191.01 27.0241V29.4941H189.03V15.0941H191.22V21.8741L190.77 21.3841C191.21 20.7441 191.76 20.2375 192.42 19.8641C193.08 19.4841 193.86 19.2941 194.76 19.2941C195.747 19.2941 196.613 19.5308 197.36 20.0041C198.113 20.4708 198.7 21.1008 199.12 21.8941C199.54 22.6875 199.75 23.5708 199.75 24.5441C199.75 25.2975 199.627 25.9941 199.38 26.6341C199.14 27.2741 198.8 27.8308 198.36 28.3041C197.92 28.7708 197.397 29.1375 196.79 29.4041C196.183 29.6641 195.517 29.7941 194.79 29.7941ZM194.39 27.8441C194.997 27.8441 195.537 27.7108 196.01 27.4441C196.49 27.1708 196.867 26.7875 197.14 26.2941C197.413 25.8008 197.55 25.2175 197.55 24.5441C197.55 23.8708 197.413 23.2875 197.14 22.7941C196.873 22.2941 196.5 21.9108 196.02 21.6441C195.547 21.3775 195.003 21.2441 194.39 21.2441C193.777 21.2441 193.23 21.3775 192.75 21.6441C192.277 21.9108 191.903 22.2941 191.63 22.7941C191.357 23.2875 191.22 23.8708 191.22 24.5441C191.22 25.2175 191.357 25.8008 191.63 26.2941C191.903 26.7875 192.277 27.1708 192.75 27.4441C193.23 27.7108 193.777 27.8441 194.39 27.8441ZM206.567 29.7941C205.534 29.7941 204.611 29.5575 203.797 29.0841C202.991 28.6041 202.357 27.9675 201.897 27.1741C201.437 26.3741 201.207 25.4975 201.207 24.5441C201.207 23.8375 201.337 23.1708 201.597 22.5441C201.864 21.9108 202.237 21.3508 202.717 20.8641C203.204 20.3775 203.774 19.9941 204.427 19.7141C205.081 19.4341 205.797 19.2941 206.577 19.2941C207.611 19.2941 208.531 19.5341 209.337 20.0141C210.151 20.4875 210.787 21.1241 211.247 21.9241C211.707 22.7175 211.937 23.5908 211.937 24.5441C211.937 25.2441 211.804 25.9108 211.537 26.5441C211.277 27.1775 210.907 27.7375 210.427 28.2241C209.947 28.7108 209.381 29.0941 208.727 29.3741C208.074 29.6541 207.354 29.7941 206.567 29.7941ZM206.567 27.8441C207.181 27.8441 207.724 27.7108 208.197 27.4441C208.677 27.1708 209.054 26.7875 209.327 26.2941C209.601 25.8008 209.737 25.2175 209.737 24.5441C209.737 23.8708 209.601 23.2875 209.327 22.7941C209.054 22.2941 208.677 21.9108 208.197 21.6441C207.724 21.3775 207.181 21.2441 206.567 21.2441C205.954 21.2441 205.407 21.3775 204.927 21.6441C204.454 21.9108 204.081 22.2941 203.807 22.7941C203.541 23.2875 203.407 23.8708 203.407 24.5441C203.407 25.2175 203.544 25.8008 203.817 26.2941C204.091 26.7875 204.464 27.1708 204.937 27.4441C205.417 27.7108 205.961 27.8441 206.567 27.8441ZM214.147 29.4941V19.5941H216.347V20.8541C216.761 20.3008 217.241 19.9041 217.787 19.6641C218.334 19.4175 218.901 19.2941 219.487 19.2941C220.394 19.2941 221.144 19.4741 221.737 19.8341C222.331 20.1941 222.771 20.6575 223.057 21.2241C223.351 21.7908 223.497 22.3741 223.497 22.9741V29.4941H221.297V23.6541C221.297 22.9475 221.084 22.3808 220.657 21.9541C220.237 21.5275 219.651 21.3141 218.897 21.3141C218.404 21.3141 217.964 21.4241 217.577 21.6441C217.197 21.8641 216.897 22.1708 216.677 22.5641C216.457 22.9508 216.347 23.4041 216.347 23.9241V29.4941H214.147ZM226.452 29.4941V19.5941H228.652V20.8541C229.065 20.3008 229.545 19.9041 230.092 19.6641C230.639 19.4175 231.205 19.2941 231.792 19.2941C232.699 19.2941 233.449 19.4741 234.042 19.8341C234.635 20.1941 235.075 20.6575 235.362 21.2241C235.655 21.7908 235.802 22.3741 235.802 22.9741V29.4941H233.602V23.6541C233.602 22.9475 233.389 22.3808 232.962 21.9541C232.542 21.5275 231.955 21.3141 231.202 21.3141C230.709 21.3141 230.269 21.4241 229.882 21.6441C229.502 21.8641 229.202 22.1708 228.982 22.5641C228.762 22.9508 228.652 23.4041 228.652 23.9241V29.4941H226.452ZM243.277 29.7941C242.21 29.7941 241.273 29.5775 240.467 29.1441C239.66 28.7041 239.03 28.0908 238.577 27.3041C238.13 26.5175 237.907 25.6041 237.907 24.5641C237.907 23.8041 238.037 23.1041 238.297 22.4641C238.557 21.8175 238.923 21.2575 239.397 20.7841C239.87 20.3108 240.423 19.9441 241.057 19.6841C241.697 19.4241 242.393 19.2941 243.147 19.2941C243.967 19.2941 244.697 19.4408 245.337 19.7341C245.977 20.0208 246.507 20.4241 246.927 20.9441C247.353 21.4641 247.653 22.0741 247.827 22.7741C248.007 23.4675 248.037 24.2208 247.917 25.0341H240.017C240.003 25.6275 240.133 26.1475 240.407 26.5941C240.68 27.0341 241.07 27.3775 241.577 27.6241C242.09 27.8708 242.693 27.9941 243.387 27.9941C243.947 27.9941 244.487 27.9108 245.007 27.7441C245.533 27.5708 246.01 27.3175 246.437 26.9841L247.287 28.5641C246.967 28.8241 246.58 29.0475 246.127 29.2341C245.673 29.4141 245.2 29.5508 244.707 29.6441C244.213 29.7441 243.737 29.7941 243.277 29.7941ZM240.147 23.4141H245.757C245.737 22.6675 245.497 22.0808 245.037 21.6541C244.583 21.2275 243.937 21.0141 243.097 21.0141C242.283 21.0141 241.607 21.2275 241.067 21.6541C240.533 22.0808 240.227 22.6675 240.147 23.4141ZM250.202 29.4941V19.5941H252.402V20.9641C252.775 20.3441 253.229 19.9108 253.762 19.6641C254.295 19.4108 254.869 19.2841 255.482 19.2841C255.682 19.2841 255.872 19.2941 256.052 19.3141C256.232 19.3341 256.405 19.3641 256.572 19.4041L256.282 21.6741C256.082 21.6141 255.879 21.5675 255.672 21.5341C255.465 21.5008 255.259 21.4841 255.052 21.4841C254.285 21.4841 253.652 21.7208 253.152 22.1941C252.652 22.6608 252.402 23.2975 252.402 24.1041V29.4941H250.202Z" fill="#040D67"/>
                </svg>
            </div>
            <div className="calendarInputTitle">
            * Внимание! Вам на почту придет письмо с темой "Подтвердите подписку / Confirmez votre abonnement à notre newsletter".<br/>Подтвердите Вашу подписку, нажав на кнопку в письме. До этого момента Ваша подписка не будет активирована.<br/>__<br/>* Attention! Vous recevrez un email avec pour objet "Подтвердите подписку / Confirmez votre abonnement à notre newsletter".<br/> Confirmez votre abonnement en cliquant sur le lien dans l'e-mail. Avant cela, votre abonnement ne sera pas activé.
            </div>
      </div>
    );
};