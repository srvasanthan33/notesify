import { Link } from "react-router-dom"
import Note from "./Note"
import './Notes.css'
let data = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati accusamus atque tempore reprehenderit voluptas suscipit rem sapiente, exercitationem eos facere odio sed deserunt iusto nostrum, omnis molestiae quos in quibusdam minima veritatis magni incidunt itaque delectus! Quisquam natus ipsa veniam nulla dignissimos quia voluptates adipisci nesciunt esse. Aperiam illum reiciendis ea amet, saepe soluta pariatur, perspiciatis id non enim repellat quibusdam eligendi quia laboriosam incidunt cumque accusamus iste quas exercitationem, voluptate sunt consequatur! Suscipit consequatur rem tempora porro quod quibusdam dignissimos, at, facilis molestias quaerat sapiente distinctio est rerum incidunt quidem pariatur doloremque asperiores! Dignissimos soluta exercitationem cum reiciendis molestias!"
let comm = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed quis illum consequuntur delectus iure, ipsum cupiditate, vero harum natus explicabo soluta dolore ut et consequatur rem mollitia voluptatibus accusamus, possimus dolores laudantium magnam non laboriosam! Fuga ut quam corrupti consectetur excepturi sit, cum laudantium aut repellat delectus quasi non nemo sapiente veritatis, ipsam unde eaque similique, totam praesentium minus adipisci nesciunt nam numquam consequuntur. Quidem, illum aut, tempora laudantium, impedit rem omnis adipisci dolor cumque porro iusto deleniti. Eius at numquam quae minus! Ipsum quisquam voluptas, totam, a architecto voluptatem labore provident in eos sint modi culpa vel dicta ad, porro perspiciatis rem corrupti minima. Odit, eius. Maxime, aliquam quas quos velit consequuntur delectus voluptatem, ab tenetur provident dolorum modi deleniti, explicabo voluptates ad distinctio non? Delectus veniam, consequuntur quidem, ullam consectetur officia libero eligendi nemo dolorum neque recusandae voluptas non sequi maiores nihil eum, ducimus quisquam. Quos, animi consequatur!"
const NotesList = () =>{
    return(
        <div className="NotesList">
            <Note/>
            <Note/>
            
            <Note/>
            <Note/>
        </div>
            
        
    )
}

export default NotesList