import { Animator, Behaviour, GameObject, MeshRenderer, PointerEventData, serializable, setActive } from "@needle-tools/engine";
import { Material, Mesh, MeshBasicMaterial } from "three";
import { GameManager } from "./manager";
import { Gold_Object } from "./GoldObject";

export class Fake_Colider extends Behaviour {


    @serializable(MeshRenderer)
    renderer?:MeshRenderer;
    start(): void {
        if(this.renderer){
            this.renderer.sharedMaterial.opacity = 0;
        }
    }


}