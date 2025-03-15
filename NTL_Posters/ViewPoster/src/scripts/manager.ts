import { Animator, Behaviour, GameObject, serializable, WaitForSeconds } from "@needle-tools/engine";

export class GameManager extends Behaviour {
    
    @serializable(GameManager)
    chain_objects?: GameObject[];

    public PullChains(): void {
        this.startCoroutine(this.pullAnimation());
    }

    private *pullAnimation() {
        if (!this.chain_objects) return;

        yield WaitForSeconds(0.35);
        for (const obj of this.chain_objects) {
            const animator = obj.getComponent(Animator);
            if (animator) {
                animator.play("Pull");
                yield  WaitForSeconds(0.85);
            }
        }
    }
}
