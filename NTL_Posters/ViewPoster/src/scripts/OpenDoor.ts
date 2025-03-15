import { Animator, Behaviour, GameObject, PointerEventData, serializable } from "@needle-tools/engine";
import { Material, Mesh, MeshBasicMaterial } from "three";
import { GameManager } from "./manager";

export class AR_Door extends Behaviour {

    public open: boolean = false;

    @serializable(GameObject)
    other?: GameObject;

    @serializable(GameManager)
    manager?: GameManager;


    onPointerClick(args: PointerEventData) {
        if(this.open == false && this.other?.getComponent(AR_Door)?.open == false){
            this.SetOpen();
            this.other.getComponent(AR_Door)?.SetOpen();

            this.other.getComponent(Animator)?.play("Move");
            this.gameObject.getComponent(Animator)?.play("Move");

            this.manager?.PullChains();


        }
    }


    public SetOpen(){
        this.open = true;
    }


}