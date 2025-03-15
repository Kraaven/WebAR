import { Behaviour, GameObject, serializable } from "@needle-tools/engine";
import { Material, Mesh, MeshBasicMaterial } from "three";



export class ScaleOnTap extends Behaviour {
    
    @serializable()
    smallScale: number = 1;

    @serializable()
    bigScale: number = 2;

    private isBig: boolean = false;

    // onPointerDown() {
    //     // Toggle scale between small and big
    //     const newScale = this.isBig ? this.smallScale : this.bigScale;
    //     this.gameObject.scale.set(newScale, newScale, newScale);
    //     this.isBig = !this.isBig;
    // }
}
