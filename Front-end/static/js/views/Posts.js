import ViewSchema from './ViewSchema.js'

export default class extends ViewSchema
{
    constructor()
    {
        super();
        this.setTitle('Posts');
    };

    async getHtml()
    {
        return`
        <ol>
            <li>
                <h3>First Göktürk Empire</h3>
                <ul>
                    <li>Ashina Tuwu</li>
                    <li>Yili Qaghan / Ashina Tumen (552 - 553) elder son of Tuwu</li>
                    <li>Yixiji Qaghan / Ashina Keluo (553 - 554) son of Tumen</li>
                    <li>Shabolue Qaghan / Ashina Shetu (581 - 587) son of Kelou</li>
                    <li>Xiegashiduona Dulan / Ashina Chuluohou (588 - 599) son of Shetu</li>
                    <li>Tuli Qaghan or Qimin Qaghan / Ashina Rangan (599 - 609) son of Chuluohou</li>
                    <li>Shibi Qaghan / Ashina Duoji (609 - 619) son of Rangan</li>
                    <li>Chuluo Qaghan / Ashina Qilifu (619 - 621) younger brother of Duoji</li>
                    <li>Jiali Qaghan / Ashina Duobi (621 - 630) third son of Rangan</li>
                    <li>Yehu Qaghan or Mohe Qaghan / Ashina Yongyulu (587 - 588) brother of Shetu</li>
                    <li>Mugan Qaghan / Ashina Qijin (554 - 572) younger brother of Kelou</li>
                    <li>Tuobo Qaghan / Unknown name (572 - 581) younger brother of Qijin</li>
                    <li>Unknown title / Ashina Anluo (581) son of Tuobo Qaghan</li>
                </ul>
            </li>
            <li>
                <h3>Second Göktürk Empire</h3>
                    <ul>
                        <li>Ilteris Sad (Idat) (682-694)</li>
                        <li>Qapagan Khaghan (Mo-ch'o) (694 - 716)</li>
                        <li>Inäl Khan 716</li>
                        <li>Bilgä Khan (716 - 734) (murdered)</li>
                        <li>Kul Tigin Khan (716 - 731) (co-ruler with Bilge)</li>
                        <li>Yollug Khan (735 - )</li>
                        <li>Icen Khan - (744)</li>
                        <li>Etimis Khan 9744-747) (in exile)</li>
                    </ul>
            </li>   
        </ol>
        `;
    }

}