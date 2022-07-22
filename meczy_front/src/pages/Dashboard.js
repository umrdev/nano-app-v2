import React, {useState, useEffect} from "react"
import {useNavigate}  from "react-router-dom";
import styled from "styled-components";
import {Button, Input, Form,  Menu, Dropdown, Modal, Table, Tag, Space, Tabs, Avatar,Radio,  Row, Col, Steps} from "antd";
import TextField from "../components/TextField";
import MButton from "../components/Button";
import MModal from "../components/Modal";
import MTag from "../components/Tag"

import FormControl from "../components/FormControl";
import {Account, Bank, Accountable, Member, Receipt, Home, Cash, Reporting, Security, All, IndividualMember, GroupMember, NotificationBell} from "../icones/itemIcons";
import { EllipsisOutlined, DownOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
const {Step} = Steps


const Container = styled.div`
          height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: row;
    `

const SidebarMenu = styled.div`
          width : 130px;
          background: #434142;
          height: 100%;
          display: flex;
          justify-items: center;
          justify-content: center;
          align-items: center;
    `

const SidebarContainer = styled.div`
          padding: 5px;
          display: flex;
          flex-direction: column;
    `

const PageContainer = styled.div`
          display: flex;
          flex-direction: column;
          flex: 1;
          width: 100%;
          overflow-y: auto;
    `

const Content = styled.div`
          width: 100%;
          /*margin : 0 15px;*/
          display: flex;
          flex-direction: column;
          flex: 1;
          padding : 5px 45px;
          background: #f6f6f6;
    `

const BreadCrumb = styled.div`
          width: 100%;
          height: 30px;
          margin: 20px 0 10px 0;
          padding: 2px 15px;
          display: flex;
          flex-direction: row;
          gap : 5px;
          color: #C4C4C4
    `

const Header = styled.div`
        width: 100%;
        height: 70px;
        /*margin-bottom: 10px; */
        padding: 5px 15px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.13);
        display: flex;
        flex-direction:  row;
        align-items: center;
        justify-content: space-between;
    `

const Footer = styled.div`
        bottom : 0;
        right : 0;
        left : 0;
        height : 30px;
        margin: 0 auto;
        font-weight: bold;
        font-size: 12px;
    `
const FooterContainer = styled.div`
        
    `

const Header2 = styled.div`
        display: flex;
        justify-content: space-between;
        justify-items: center;
        align-items: center;
        margin: 20px 0 15px 0;
        padding: 2px 15px;
    `

const Title = styled.div`
          font-size: 18px;
          font-weight: bold;
          color : #434142;
          font-family: 'Montserrat Bold';
    `

const Search = styled.div`
          margin: 20px 0 20px 0;
          padding: 5px 15px;
    `

const SearchContainerForm = styled(Form)`
        padding: 18px 20px;
        background: #FFFFFF;
        border-radius: 16px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        justify-items: center;
        align-items: center;
    `


const SideBarItems = styled.div`
          display : flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 10px 6px;
          margin-bottom: 10px;
          cursor: pointer;
          &:hover{
                background: rgba(255, 255, 255, 0.08);
                border-radius: 12px;
                color: white;
                font-family: 'Montserrat Bold';
          }
    `

const LabelItem = styled.div`
        font-size: 14px;
        font-weight: 600;
        color: #939487;
        font-family: 'Montserrat SemiBold';
    `


const TitleTab = styled.div`
      font-size: 18px;
      font-family: "Montserrat Bold";
      margin-bottom: 8px;
    `

const TableContainer = styled.div`
        padding: 5px 15px;
    `

const RootBreadcrumb = styled.div`
      font-family: 'Montserrat Medium';
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
    `

const ActiveBreadcrumb = styled.div`
      font-family: 'Montserrat Bold';
      font-style: normal;
      font-size: 15px;
      text-transform: capitalize;
    `

const Profil = styled.div`
          margin : 2px;
          cursor: pointer;
          font-size: 16px;
          font-family: 'Montserrat Bold';
    `

const ContentHeader = styled.div`
        margin : 2px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        column-gap: 20px;
        right : 0;
    `


const DropdownProfil = styled(Dropdown)`
      &&&{
       .meczy_theme_dropdown, .ant-dropdown, .ant-dropdown-menu {
          border-radius : 12px;
          margin : 1px;
        }
      }
    `

const ButtonDropdown = styled.div`
    &&&{
          display: flex;
          justify-content: center;
          flex-direction: row;
          align-items: center;
          column-gap: 15px;
    }
    `

const ContentHeader1 = styled.div`
       margin : 1px;
    `

const Agent = styled.div`
       display: flex;
       flex-direction: column;
    `

const Name = styled.div`
        font-size: 13px;
        color : #434142;
        font-family: 'Montserrat SemiBold';
    `

const Role = styled.div`
        font-size: 12px;
        color: #939487;
        font-family: 'Montserrat Medium';
    `

const WrapperTable = styled.div`
        width : 100%;
        background: #FFFFFF;
        border-radius: 20px; 
        padding : 20px;
    `
const CardTitle = styled.div`
        font-size: 20px;
        color : #282c34;
        font-family: 'Montserrat Bold';
        text-align: left;
        font-weight: 700;
        margin : 25px 0;
    `

const ModalContainer = styled.div`
        margin: 0 auto;
        padding : 35px;
    `

const ModalContent = styled(Row)`
       &&&{
         width: 100%;
         justify-content: center;
         display: flex;
       }
    `

const RightSide = styled(Col)`
         width : 100%;
         padding: 15px;
    `
const LeftSide = styled(Col)`
         width : 100%;
         padding : 12px; 
    `

const FormStep = styled(Form)`
       
    `

const Legend = styled.div`
       font-family: 'Montserrat Bold';
       font-size: 18px;
       color: #434142;
       margin: 15px 0;
      border-bottom: 1px solid #939487;
    `

const MTable = styled(Table)`
        &&&{
              .my-table table{
                border-collapse: collapse;
                border: 1px solid black;
              }
          
              .my-table, th{
                    background-color: #FFFFFF;
                    color: #C4C4C4;
                    font-family: 'Montserrat Bold';
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 30px;
              }
          
             .my-table, tr{
                   background-color: #FFFFFF;
                   color: #434142;
                   font-family: 'Montserrat Medium';
                   font-style: normal;
                   font-weight: 500;
                   font-size: 15px;
                   line-height: 30px;
              }
            .my-table, .ant-pagination{
                background: rgba(247, 247, 247, 0.67);;
                padding: 10px;
                border-radius: 10px;
                margin: 35px 0 10px 0;
          }
        }
    `


const FilerTabs = styled(Tabs)`
        margin : 18px 0;
    `

const Dashboard = () => {


    const navigate = useNavigate()

    const menu = (
        <Menu
            items={[
                {
                    label: <strong onClick={()=> setVisible(!visible)}>Individuel</strong>,
                    key: '0',
                },
                {
                    type: 'divider',
                },
                {
                    label: <strong>Groupement</strong>,
                    key: '1',
                }

            ]}
        />
    );

    const [form] = Form.useForm();

    const actions = (
        <Menu
            items={[
                {
                    label: <strong>Visualiser</strong>,
                    key: '0',
                },
                {
                    type: 'divider',
                },
                {
                    label: <strong>Supprimer</strong>,
                    key: '1',
                }

            ]}
        />
    );

    const settingsUser = (
        <Menu
            items={[
                {
                    label: <strong>Mon profil</strong>,
                    key: '0',
                },
                {
                    type: 'divider',
                },
                {
                    label: <strong>Paramètres</strong>,
                    key: '1',
                },
                {
                    type: 'divider',
                },
                {
                    label: <strong onClick={()=> navigate("/")}>Déconnexion</strong>,
                    key: '2',
                }

            ]}
        />
    );

    const columns = [
       /* {
            title: 'Photo',
            dataIndex: 'photo',
            key: 'photo',
            render: photo => (
                <img src={photo}/>
            )
        },*/
        {
            title: 'Nom Complet',
            dataIndex: 'full_name',
            key: 'full_name'
        },
        {
            title: 'Numéro Id',
            dataIndex: 'nin',
            key: 'nin',
        },
        {
            title: 'Téléphone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Adresse',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: status => (
                    <Tag color={status ? " green" : "volcano"}>
                        { status ? 'Activé'.toUpperCase() : 'Désactivé'.toUpperCase()}
                    </Tag>
            )
        },
        {
            title: 'Date d\'adhésion',
            key: 'date_subscription',
            dataIndex: 'date_subscription'
        },
        {
            title: 'Action',
            key: 'action',
            render: (index) => (
                <Space size="large">
                    <MButton BOutline small>Editer</MButton>
                    <Dropdown overlay={actions} trigger={['click']}>
                        <a onClick={(e) => e.preventDefault()}>
                            <MButton tertiary small className="dropdown-type-member">
                                <EllipsisOutlined style={{fontWeight: 900, fontSize:20, textAlign: 'center'}} />
                            </MButton>
                        </a>
                    </Dropdown>
                </Space>
            ),
        },
    ];

    const datas = [
        {
            "id": 1,
            "photo": "https://robohash.org/doloribusvoluptatemoptio.png?size=50x50&set=set1",
            "full_name": "Tabbi Service",
            "nin": "749364990-1",
            "phone": "987-592-2276",
            "address": "993 Fisk Way",
            "status": "Bloqué",
            "date_subscription": "05/08/2021",
            "tag": "individual"
        }, {
            "id": 2,
            "photo": "https://robohash.org/cumoditrerum.png?size=50x50&set=set1",
            "full_name": "Mordecai Gagg",
            "nin": "447471180-7",
            "phone": "421-375-7186",
            "address": "3329 2nd Place",
            "status": "Activé",
            "date_subscription": "17/11/2021",
            "tag": "group"
        }, {
            "id": 3,
            "photo": "https://robohash.org/doloreseligendiamet.png?size=50x50&set=set1",
            "full_name": "Katina McClinton",
            "nin": "638497801-6",
            "phone": "239-925-5166",
            "address": "52 Bowman Center",
            "status": "Bloqué",
            "date_subscription": "07/05/2022",
            "tag": "individual"
        }, {
            "id": 4,
            "photo": "https://robohash.org/etvoluptatumhic.png?size=50x50&set=set1",
            "full_name": "Cassius Kleinlerer",
            "nin": "937215371-0",
            "phone": "192-474-7138",
            "address": "5760 Hovde Pass",
            "status": "Désactivé",
            "date_subscription": "11/02/2022",
            "tag": "individual"
        }, {
            "id": 5,
            "photo": "https://robohash.org/omnisdeseruntest.png?size=50x50&set=set1",
            "full_name": "Renie Leimster",
            "nin": "408366036-8",
            "phone": "956-779-1635",
            "address": "724 Milwaukee Crossing",
            "status": "Bloqué",
            "date_subscription": "17/09/2021",
            "tag": "group"
        }, {
            "id": 6,
            "photo": "https://robohash.org/harumrepellenduseveniet.png?size=50x50&set=set1",
            "full_name": "Jo-anne Reynoldson",
            "nin": "109463277-5",
            "phone": "729-133-4546",
            "address": "715 North Road",
            "status": "Bloqué",
            "date_subscription": "01/04/2022",
            "tag": "group"
        }, {
            "id": 7,
            "photo": "https://robohash.org/distinctionemoimpedit.png?size=50x50&set=set1",
            "full_name": "Sloane Pesik",
            "nin": "461180263-9",
            "phone": "786-509-1192",
            "address": "45085 Sunfield Terrace",
            "status": "Activé",
            "date_subscription": "26/04/2022",
            "tag": "individual"
        }, {
            "id": 8,
            "photo": "https://robohash.org/debitisrationetenetur.png?size=50x50&set=set1",
            "full_name": "Brooks Power",
            "nin": "443827369-2",
            "phone": "207-211-4564",
            "address": "77 Arizona Court",
            "status": "Désactivé",
            "date_subscription": "17/01/2022",
            "tag": "group"
        }, {
            "id": 9,
            "photo": "https://robohash.org/harumcommodiplaceat.png?size=50x50&set=set1",
            "full_name": "Dell Larose",
            "nin": "146391885-2",
            "phone": "443-945-4225",
            "address": "5314 Blackbird Lane",
            "status": "Bloqué",
            "date_subscription": "18/04/2022",
            "tag": "group"
        }, {
            "id": 10,
            "photo": "https://robohash.org/eiusetest.png?size=50x50&set=set1",
            "full_name": "Peggie Coomber",
            "nin": "280657388-2",
            "phone": "531-862-1358",
            "address": "7878 International Trail",
            "status": "Désactivé",
            "date_subscription": "01/02/2022",
            "tag": "individual"
        }, {
            "id": 11,
            "photo": "https://robohash.org/quidolorumeum.png?size=50x50&set=set1",
            "full_name": "Hester Regglar",
            "nin": "454134690-7",
            "phone": "489-313-9964",
            "address": "59 Redwing Street",
            "status": "Activé",
            "date_subscription": "10/06/2021",
            "tag": "group"
        }, {
            "id": 12,
            "photo": "https://robohash.org/consequaturquilaudantium.png?size=50x50&set=set1",
            "full_name": "Doralyn Gascoyne",
            "nin": "994853100-0",
            "phone": "199-177-0275",
            "address": "1701 Nevada Crossing",
            "status": "Bloqué",
            "date_subscription": "17/09/2021",
            "tag": "individual"
        }, {
            "id": 13,
            "photo": "https://robohash.org/rerumquoet.png?size=50x50&set=set1",
            "full_name": "Lynne Denge",
            "nin": "864276632-8",
            "phone": "243-168-8429",
            "address": "339 American Ash Plaza",
            "status": "Désactivé",
            "date_subscription": "20/02/2022",
            "tag": "group"
        }, {
            "id": 14,
            "photo": "https://robohash.org/aliquamautut.png?size=50x50&set=set1",
            "full_name": "Domenico Attow",
            "nin": "211783328-4",
            "phone": "482-479-3974",
            "address": "91163 Debs Trail",
            "status": "Activé",
            "date_subscription": "28/09/2021",
            "tag": "group"
        }, {
            "id": 15,
            "photo": "https://robohash.org/facereomnissed.png?size=50x50&set=set1",
            "full_name": "Paulie Buesden",
            "nin": "898570357-9",
            "phone": "417-832-2654",
            "address": "641 8th Trail",
            "status": "Bloqué",
            "date_subscription": "14/11/2021",
            "tag": "group"
        }, {
            "id": 16,
            "photo": "https://robohash.org/cumquemaioreseos.png?size=50x50&set=set1",
            "full_name": "Peri Dondon",
            "nin": "444471039-X",
            "phone": "640-721-0752",
            "address": "2 Mitchell Way",
            "status": "Désactivé",
            "date_subscription": "29/06/2021",
            "tag": "group"
        }, {
            "id": 17,
            "photo": "https://robohash.org/esteumnecessitatibus.png?size=50x50&set=set1",
            "full_name": "Kayne Traves",
            "nin": "535988699-4",
            "phone": "950-955-6823",
            "address": "59486 Drewry Pass",
            "status": "Désactivé",
            "date_subscription": "18/05/2022",
            "tag": "group"
        }, {
            "id": 18,
            "photo": "https://robohash.org/involuptatumearum.png?size=50x50&set=set1",
            "full_name": "Demetri Buttrey",
            "nin": "018381559-9",
            "phone": "624-842-8416",
            "address": "31 Mifflin Junction",
            "status": "Désactivé",
            "date_subscription": "25/08/2021",
            "tag": "individual"
        }, {
            "id": 19,
            "photo": "https://robohash.org/reprehenderitducimussunt.png?size=50x50&set=set1",
            "full_name": "Mack Deport",
            "nin": "325447921-1",
            "phone": "857-312-8794",
            "address": "4389 Morningstar Court",
            "status": "Activé",
            "date_subscription": "02/06/2021",
            "tag": "group"
        }, {
            "id": 20,
            "photo": "https://robohash.org/cumdoloresest.png?size=50x50&set=set1",
            "full_name": "Isabel Engall",
            "nin": "762391448-0",
            "phone": "527-346-7488",
            "address": "0493 Truax Avenue",
            "status": "Désactivé",
            "date_subscription": "19/03/2022",
            "tag": "group"
        }, {
            "id": 21,
            "photo": "https://robohash.org/adipisciinut.png?size=50x50&set=set1",
            "full_name": "Annette Garr",
            "nin": "812517768-X",
            "phone": "619-180-0297",
            "address": "5 Troy Way",
            "status": "Activé",
            "date_subscription": "01/09/2021",
            "tag": "group"
        }, {
            "id": 22,
            "photo": "https://robohash.org/veltemporibuset.png?size=50x50&set=set1",
            "full_name": "Sherman Baxstair",
            "nin": "603283965-6",
            "phone": "429-276-0514",
            "address": "120 Shelley Avenue",
            "status": "Bloqué",
            "date_subscription": "08/03/2022",
            "tag": "group"
        }, {
            "id": 23,
            "photo": "https://robohash.org/evenietanimiquia.png?size=50x50&set=set1",
            "full_name": "Persis Ladds",
            "nin": "230893383-6",
            "phone": "392-746-8488",
            "address": "94352 Myrtle Road",
            "status": "Activé",
            "date_subscription": "30/09/2021",
            "tag": "group"
        }, {
            "id": 24,
            "photo": "https://robohash.org/vitaemaximequibusdam.png?size=50x50&set=set1",
            "full_name": "Elinore Wasselin",
            "nin": "328480217-7",
            "phone": "846-621-7203",
            "address": "7 Orin Alley",
            "status": "Bloqué",
            "date_subscription": "06/04/2022",
            "tag": "individual"
        }, {
            "id": 25,
            "photo": "https://robohash.org/officianecessitatibusatque.png?size=50x50&set=set1",
            "full_name": "Annissa Ashworth",
            "nin": "902383853-X",
            "phone": "560-312-5050",
            "address": "21 Caliangt Junction",
            "status": "Activé",
            "date_subscription": "01/06/2021",
            "tag": "group"
        }, {
            "id": 26,
            "photo": "https://robohash.org/easitvoluptatem.png?size=50x50&set=set1",
            "full_name": "Pattie Pothecary",
            "nin": "394823424-8",
            "phone": "545-674-5028",
            "address": "73 Blaine Circle",
            "status": "Désactivé",
            "date_subscription": "03/07/2021",
            "tag": "individual"
        }, {
            "id": 27,
            "photo": "https://robohash.org/rerumsedpossimus.png?size=50x50&set=set1",
            "full_name": "Virgie Vallery",
            "nin": "877593208-3",
            "phone": "500-376-2913",
            "address": "5 Lakeland Hill",
            "status": "Désactivé",
            "date_subscription": "08/12/2021",
            "tag": "group"
        }, {
            "id": 28,
            "photo": "https://robohash.org/aliasreprehenderitsunt.png?size=50x50&set=set1",
            "full_name": "Mortimer Brobak",
            "nin": "241827532-9",
            "phone": "247-526-5389",
            "address": "5637 Orin Junction",
            "status": "Activé",
            "date_subscription": "09/03/2022",
            "tag": "individual"
        }, {
            "id": 29,
            "photo": "https://robohash.org/quiexplicaboreprehenderit.png?size=50x50&set=set1",
            "full_name": "Vilhelmina Nelissen",
            "nin": "888128645-9",
            "phone": "883-371-6841",
            "address": "35345 Sycamore Hill",
            "status": "Bloqué",
            "date_subscription": "18/10/2021",
            "tag": "individual"
        }, {
            "id": 30,
            "photo": "https://robohash.org/nisivoluptasvero.png?size=50x50&set=set1",
            "full_name": "Tabbi Aldhous",
            "nin": "856807964-4",
            "phone": "835-770-1928",
            "address": "65815 Sunbrook Alley",
            "status": "Activé",
            "date_subscription": "01/08/2021",
            "tag": "group"
        }, {
            "id": 31,
            "photo": "https://robohash.org/estettempora.png?size=50x50&set=set1",
            "full_name": "Eolande Blything",
            "nin": "623244174-5",
            "phone": "258-636-5903",
            "address": "614 Meadow Ridge Drive",
            "status": "Activé",
            "date_subscription": "16/05/2022",
            "tag": "group"
        }, {
            "id": 32,
            "photo": "https://robohash.org/minusrecusandaesequi.png?size=50x50&set=set1",
            "full_name": "Eve Laterza",
            "nin": "271548117-9",
            "phone": "993-767-0272",
            "address": "7196 Sauthoff Pass",
            "status": "Bloqué",
            "date_subscription": "23/06/2021",
            "tag": "individual"
        }, {
            "id": 33,
            "photo": "https://robohash.org/expeditadebitiseius.png?size=50x50&set=set1",
            "full_name": "Carlotta Bohling",
            "nin": "226702960-X",
            "phone": "602-926-6148",
            "address": "272 Del Sol Court",
            "status": "Activé",
            "date_subscription": "03/06/2021",
            "tag": "group"
        }, {
            "id": 34,
            "photo": "https://robohash.org/repellendusfuganihil.png?size=50x50&set=set1",
            "full_name": "Lynnelle Garrish",
            "nin": "051328746-9",
            "phone": "697-181-5916",
            "address": "35 American Ash Pass",
            "status": "Activé",
            "date_subscription": "09/11/2021",
            "tag": "group"
        }, {
            "id": 35,
            "photo": "https://robohash.org/exercitationemperspiciatisa.png?size=50x50&set=set1",
            "full_name": "Wynne Troman",
            "nin": "986176705-3",
            "phone": "871-477-9004",
            "address": "4 Donald Way",
            "status": "Bloqué",
            "date_subscription": "02/12/2021",
            "tag": "group"
        }, {
            "id": 36,
            "photo": "https://robohash.org/authicquis.png?size=50x50&set=set1",
            "full_name": "Quinta Birtonshaw",
            "nin": "641797033-7",
            "phone": "951-161-3092",
            "address": "70596 Derek Court",
            "status": "Bloqué",
            "date_subscription": "05/07/2021",
            "tag": "group"
        }, {
            "id": 37,
            "photo": "https://robohash.org/laborevelitad.png?size=50x50&set=set1",
            "full_name": "Alaine Hardwin",
            "nin": "036782025-0",
            "phone": "966-834-9841",
            "address": "714 Red Cloud Hill",
            "status": "Désactivé",
            "date_subscription": "27/05/2021",
            "tag": "group"
        }, {
            "id": 38,
            "photo": "https://robohash.org/perspiciatisfacerenatus.png?size=50x50&set=set1",
            "full_name": "Sibeal Minifie",
            "nin": "095837311-6",
            "phone": "169-908-1338",
            "address": "62759 Upham Court",
            "status": "Désactivé",
            "date_subscription": "13/09/2021",
            "tag": "group"
        }, {
            "id": 39,
            "photo": "https://robohash.org/aliquidquamest.png?size=50x50&set=set1",
            "full_name": "Ely Sebright",
            "nin": "136865896-2",
            "phone": "970-301-0265",
            "address": "059 Nobel Park",
            "status": "Bloqué",
            "date_subscription": "17/08/2021",
            "tag": "individual"
        }, {
            "id": 40,
            "photo": "https://robohash.org/perferendisconsecteturfugit.png?size=50x50&set=set1",
            "full_name": "Dory Shuttleworth",
            "nin": "629146210-9",
            "phone": "628-731-7151",
            "address": "6042 Gale Lane",
            "status": "Activé",
            "date_subscription": "10/02/2022",
            "tag": "group"
        }, {
            "id": 41,
            "photo": "https://robohash.org/delenitiprovidenterror.png?size=50x50&set=set1",
            "full_name": "Hailee Kunkler",
            "nin": "463211151-1",
            "phone": "694-625-3863",
            "address": "05 Oak Valley Point",
            "status": "Activé",
            "date_subscription": "18/12/2021",
            "tag": "group"
        }, {
            "id": 42,
            "photo": "https://robohash.org/voluptatumporroet.png?size=50x50&set=set1",
            "full_name": "Carrie Chapple",
            "nin": "043545093-X",
            "phone": "954-189-4650",
            "address": "2 Lien Pass",
            "status": "Bloqué",
            "date_subscription": "19/12/2021",
            "tag": "group"
        }, {
            "id": 43,
            "photo": "https://robohash.org/similiquedeseruntcum.png?size=50x50&set=set1",
            "full_name": "Tabbatha Richfield",
            "nin": "926651835-2",
            "phone": "841-384-5372",
            "address": "6609 Superior Plaza",
            "status": "Bloqué",
            "date_subscription": "14/06/2021",
            "tag": "group"
        }, {
            "id": 44,
            "photo": "https://robohash.org/aliquamporroqui.png?size=50x50&set=set1",
            "full_name": "Eugen Hadgraft",
            "nin": "404460358-8",
            "phone": "955-401-2681",
            "address": "226 Bobwhite Pass",
            "status": "Activé",
            "date_subscription": "01/03/2022",
            "tag": "individual"
        }, {
            "id": 45,
            "photo": "https://robohash.org/mollitianonullam.png?size=50x50&set=set1",
            "full_name": "Fayina Oleksinski",
            "nin": "734019739-7",
            "phone": "858-299-3957",
            "address": "270 Onsgard Center",
            "status": "Désactivé",
            "date_subscription": "03/09/2021",
            "tag": "individual"
        }, {
            "id": 46,
            "photo": "https://robohash.org/voluptatemutquae.png?size=50x50&set=set1",
            "full_name": "Corby Edmondson",
            "nin": "348260370-7",
            "phone": "993-268-3787",
            "address": "660 Logan Way",
            "status": "Activé",
            "date_subscription": "03/01/2022",
            "tag": "individual"
        }, {
            "id": 47,
            "photo": "https://robohash.org/itaquequidemsed.png?size=50x50&set=set1",
            "full_name": "Nikkie Matskevich",
            "nin": "573976108-5",
            "phone": "181-749-6457",
            "address": "5 Anthes Junction",
            "status": "Bloqué",
            "date_subscription": "22/03/2022",
            "tag": "group"
        }, {
            "id": 48,
            "photo": "https://robohash.org/hicquamsimilique.png?size=50x50&set=set1",
            "full_name": "Stanfield Combes",
            "nin": "048142222-6",
            "phone": "788-833-4941",
            "address": "8 Darwin Hill",
            "status": "Bloqué",
            "date_subscription": "24/09/2021",
            "tag": "group"
        }, {
            "id": 49,
            "photo": "https://robohash.org/delenitietvoluptatum.png?size=50x50&set=set1",
            "full_name": "Ema Cabble",
            "nin": "431787770-8",
            "phone": "774-381-6377",
            "address": "4 Washington Junction",
            "status": "Désactivé",
            "date_subscription": "02/01/2022",
            "tag": "individual"
        }, {
            "id": 50,
            "photo": "https://robohash.org/autemminimarepellendus.png?size=50x50&set=set1",
            "full_name": "Shara Blanko",
            "nin": "252543681-4",
            "phone": "930-398-1258",
            "address": "6170 Mcbride Crossing",
            "status": "Désactivé",
            "date_subscription": "15/03/2022",
            "tag": "group"
        }
    ];

    const [members, setMembers] = useState([])
    const [filter, setFilter] = useState("1")
    const [selectedRowKeys, setSelectedRowKeys] = useState([])
    const [visible, setVisible] = useState(false)
    const [current, setCurrent] = useState(0);




    const handleChangeTab = (key) => {
        console.log("key", key)
        setFilter(key)
    }

    useEffect(()=> {
        console.log("Type selected", filter)
        if(filter === "2"){
            setMembers(datas.filter(members => members.tag === "individual"))
        }else if(filter === "3"){
            setMembers(datas.filter(members => members.tag === "group"))
        }else{
            setMembers(datas)
        }
    }, [filter])

    const onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        setSelectedRowKeys(selectedRowKeys)
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };



    
    return (
        <Container>
            <MModal
                title="Ajout d'un nouveau membre"
                visible={visible}
                centered={true}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={1500}
                keyboard={false}
            >
                <ModalContainer>
                    <ModalContent>
                        <LeftSide xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Steps
                                type="navigation"
                                current={current}
                                className="site-navigation-steps"
                            >
                                <Step status="finish" title="Step 1" />
                                <Step status="process" title="Step 2" />
                                <Step status="wait" title="Step 3" />
                                <Step status="wait" title="Step 4" />
                            </Steps>
                        </LeftSide>

                    </ModalContent>
                    <Row style={{width : '100%', padding : '12px 150px'}}>
                        <RightSide xs={24} sm={24} md={24} lg={24} xl={24}>
                            <FormStep layout="vertical" hideRequiredMark>
                                <Row gutter={12}>
                                    <Col lg={12} xl={12} md={12}>
                                        <FormControl
                                            label="Sexe"
                                            name="sex"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Ce champs est requis',
                                                },
                                            ]}
                                        >
                                            <Radio.Group defaultValue="M" buttonStyle="solid">
                                                <Radio.Button value="M">Masculin</Radio.Button>
                                                <Radio.Button value="F">Féminin</Radio.Button>
                                            </Radio.Group>
                                        </FormControl>

                                    </Col>
                                </Row>
                                <Row gutter={12}>
                                    <Col lg={12} xl={12} md={12}>
                                        <FormControl
                                            label="Prénom"
                                            name="firstname"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Ce champs est requis',
                                                },
                                            ]}
                                        >
                                            <TextField large />
                                        </FormControl>
                                    </Col>
                                    <Col lg={12} xl={12} md={12}>
                                        <FormControl
                                            label="Nom"
                                            name="lastname"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Ce champs est requis',
                                                },
                                            ]}
                                        >
                                            <TextField large />
                                        </FormControl>
                                    </Col>
                                </Row>

                                <Row gutter={12}>
                                    <Col lg={12} xl={12} md={12}>
                                        <FormControl
                                            label="Date de naissance"
                                            name="date_of_birth"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Ce champs est requis',
                                                },
                                            ]}
                                        >
                                            <TextField large />
                                        </FormControl>
                                    </Col>
                                    <Col lg={12} xl={12} md={12}>
                                        <FormControl
                                            label="Lieu de naissance"
                                            name="birthplace"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Ce champs est requis',
                                                },
                                            ]}
                                        >
                                            <TextField large />
                                        </FormControl>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg={24} xl={24} md={24}>
                                        <Legend>Coordonnées et Résidence</Legend>
                                    </Col>
                                </Row>

                                <Row gutter={12}>
                                    <Col lg={12} xl={12} md={12}>
                                        <FormControl
                                            label="Téléphone"
                                            name="date_of_birth"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Ce champs est requis',
                                                },
                                            ]}
                                        >
                                            <TextField large />
                                        </FormControl>
                                    </Col>
                                    <Col lg={12} xl={12} md={12}>
                                        <FormControl
                                            label="Adresse E-mail"
                                            name="birthplace"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Ce champs est requis',
                                                },
                                            ]}
                                        >
                                            <TextField large />
                                        </FormControl>
                                    </Col>
                                </Row>

                                <Row gutter={12}>
                                    <Col lg={12} xl={12} md={12}>
                                        <FormControl
                                            label="Adresse"
                                            name="date_of_birth"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Ce champs est requis',
                                                },
                                            ]}
                                        >
                                            <TextField large />
                                        </FormControl>
                                    </Col>
                                    <Col lg={12} xl={12} md={12}>
                                        <FormControl
                                            label="Depuis quand ?"
                                            name="birthplace"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Ce champs est requis',
                                                },
                                            ]}
                                        >
                                            <TextField large />
                                        </FormControl>
                                    </Col>
                                </Row>

                                <Row gutter={12}>
                                    <Col lg={12} xl={12} md={12}>
                                        <FormControl
                                            label="Êtes-vous ?"
                                            name="home"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Ce champs est requis',
                                                },
                                            ]}
                                        >
                                            <Radio.Group defaultValue="proprio" buttonStyle="solid">
                                                <Radio.Button value="locataire">Locataire</Radio.Button>
                                                <Radio.Button value="proprio">Propriètaire</Radio.Button>
                                            </Radio.Group>
                                        </FormControl>

                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg={24} xl={24} md={24}>
                                        <Legend>Type</Legend>
                                    </Col>
                                </Row>

                                <Row gutter={12}>
                                    <Col lg={12} xl={12} md={12}>
                                        <FormControl
                                            label="Êtes-vous ?"
                                            name="home"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Ce champs est requis',
                                                },
                                            ]}
                                        >
                                            <Radio.Group defaultValue="carte_identite" buttonStyle="solid">
                                                <Radio.Button value="carte_identite">Carte d'identité</Radio.Button>
                                                <Radio.Button value="passeport">Passeport</Radio.Button>
                                            </Radio.Group>
                                        </FormControl>

                                    </Col>
                                </Row>

                                <Row gutter={12}>
                                    <Col lg={12} xl={12} md={12}>
                                        <FormControl
                                            label="Date D'expiration"
                                            name="date_of_birth"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Ce champs est requis',
                                                },
                                            ]}
                                        >
                                            <TextField large />
                                        </FormControl>
                                    </Col>
                                    <Col lg={12} xl={12} md={12}>
                                        <FormControl
                                            label="Numéro"
                                            name="birthplace"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Ce champs est requis',
                                                },
                                            ]}
                                        >
                                            <TextField large />
                                        </FormControl>
                                    </Col>
                                </Row>

                                <Row gutter={12}>
                                    <Col lg={12} xl={12} md={12}>
                                        <FormControl
                                            label="Souhaitez-vous avoir ajouter un autre contact ?"
                                            name="home"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Ce champs est requis',
                                                },
                                            ]}
                                        >
                                            <Radio.Group defaultValue="yes" buttonStyle="solid">
                                                <Radio.Button value="yes">Oui</Radio.Button>
                                                <Radio.Button value="no">Non</Radio.Button>
                                            </Radio.Group>
                                        </FormControl>
                                    </Col>
                                </Row>

                                <Row gutter={12}>
                                    <Col lg={8} xl={8} md={8}>
                                        <FormControl
                                            label="Prénom et Nom"
                                            name="date_of_birth"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Ce champs est requis',
                                                },
                                            ]}
                                        >
                                            <TextField large />
                                        </FormControl>
                                    </Col>
                                    <Col lg={8} xl={8} md={8}>
                                        <FormControl
                                            label="Adresse"
                                            name="address"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Ce champs est requis',
                                                },
                                            ]}
                                        >
                                            <TextField large />
                                        </FormControl>
                                    </Col>
                                    <Col lg={8} xl={8} md={8}>
                                        <FormControl
                                            label="Téléphone"
                                            name="phonecall"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Ce champs est requis',
                                                },
                                            ]}
                                        >
                                            <TextField large />
                                        </FormControl>
                                    </Col>
                                </Row>

                            </FormStep>
                        </RightSide>
                    </Row>

                </ModalContainer>

            </MModal>
            <SidebarMenu>
                <SidebarContainer>
                    <SideBarItems>
                        <Home />
                        <LabelItem>Accueil</LabelItem>
                    </SideBarItems>
                    <SideBarItems>
                        <Member />
                        <LabelItem>Membre</LabelItem>
                    </SideBarItems>
                    <SideBarItems>
                        <Account />
                        <LabelItem>Compte</LabelItem>
                    </SideBarItems>
                    <SideBarItems>
                        <Accountable />
                        <LabelItem>Comptabilité</LabelItem>
                    </SideBarItems>
                    <SideBarItems>
                        <Cash />
                        <LabelItem>Caisse</LabelItem>
                    </SideBarItems>
                    <SideBarItems>
                        <Bank />
                        <LabelItem>Banque</LabelItem>
                    </SideBarItems>
                    <SideBarItems>
                        <Receipt />
                        <LabelItem>Crédit</LabelItem>
                    </SideBarItems>
                    <SideBarItems>
                        <Security />
                        <LabelItem>Sécurité</LabelItem>
                    </SideBarItems>
                    <SideBarItems>
                        <Reporting />
                        <LabelItem>Reporting</LabelItem>
                    </SideBarItems>
                </SidebarContainer>
            </SidebarMenu>

            <PageContainer>
                <Header>
                    <ContentHeader1>
                        Logo
                    </ContentHeader1>
                    <ContentHeader>
                        <NotificationBell />
                        <Profil>
                            <DropdownProfil className="meczy_theme_dropdown" overlay={settingsUser} trigger={['click']}>
                                <ButtonDropdown onClick={(e) => e.preventDefault()}>
                                    <Avatar style={{ backgroundColor: '#f56a00',}}>D</Avatar>
                                      <Agent>
                                          <Name>Djibril Diallo</Name>
                                          <Role>Directeur</Role>
                                      </Agent>
                                    <DownOutlined />
                                </ButtonDropdown>
                            </DropdownProfil>
                        </Profil>
                    </ContentHeader>
                </Header>
                <Content>
                    <BreadCrumb><RootBreadcrumb>Accueil </RootBreadcrumb> > <ActiveBreadcrumb>Membre</ActiveBreadcrumb> </BreadCrumb>
                    <Header2>
                        <Title>Membre</Title>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <a onClick={(e) => e.preventDefault()}>
                                <MButton primary large className="dropdown-type-member">
                                    Nouveau
                                    <DownOutlined />
                                </MButton>
                            </a>
                        </Dropdown>
                    </Header2>
                    <Search>
                        <SearchContainerForm layout="inline" form={form}>

                                    <FormControl
                                        name="phone"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Ce champs est requis',
                                            },
                                        ]}
                                    >
                                        <TextField large type="text" placeholder="Téléphone" />
                                    </FormControl>

                                    <FormControl
                                        name="numero_id"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Ce champs est requis',
                                            },
                                        ]}
                                    >
                                        <TextField large type="text" placeholder="Numéro Identification" />
                                    </FormControl>

                                    <FormControl
                                        name="date_of_birth"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Ce champs est requis',
                                            },
                                        ]}
                                    >
                                        <TextField large type="text" placeholder="Date de naissance" />
                                    </FormControl>
                                    <FormControl>
                                        <MButton primary large>Rechercher</MButton>
                                    </FormControl>

                                    <FormControl>
                                        <MButton BOutline large>Filtre</MButton>
                                    </FormControl>

                                    <FormControl>
                                        <MButton secondary large>Exporter</MButton>
                                    </FormControl>

                        </SearchContainerForm>
                    </Search>
                    <TableContainer>
                        <WrapperTable>
                            <CardTitle>
                                Liste des membres
                            </CardTitle>
                            <FilerTabs defaultActiveKey="1" size="large" onChange={handleChangeTab}>
                                <TabPane tab={<div><All />Tous</div>} key="1">
                                    <TitleTab>Tous</TitleTab>
                                </TabPane>
                                <TabPane
                                    tab={<>
                                        <IndividualMember />
                                        <span>Individuel</span>
                                    </>
                                    }
                                    key="2">
                                    <TitleTab>Individuel</TitleTab>
                                </TabPane>
                                <TabPane
                                    tab={
                                        <span>
                                  <GroupMember />
                                   Groupement
                                </span>
                                    }
                                    key="3">
                                    <TitleTab>Groupement</TitleTab>
                                </TabPane>
                            </FilerTabs>

                            <MTable className="my-table" rowSelection={rowSelection} columns={columns} dataSource={members} />
                        </WrapperTable>

                    </TableContainer>
                </Content>

                <Footer>Footer - Copyright@2022</Footer>
            </PageContainer>

        </Container>
    )
}


export default Dashboard