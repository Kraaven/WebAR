import { Animator, Behaviour, GameObject, PointerEventData, serializable } from "@needle-tools/engine";
import { Material, Mesh, MeshBasicMaterial } from "three";
import { GameManager } from "./manager";

export class Gold_Object extends Behaviour {

    @serializable(GameManager)
    manager?: GameManager;

    @serializable()
    lab_id?:string;


    onPointerClick(args: PointerEventData) {
        if(this.lab_id){
            this.manager?.ShowLabData(this.lab_id.toString());
        }
    }


}