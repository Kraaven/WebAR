import { Animator, Behaviour, CoroutineData, GameObject, RectTransform, serializable, setActive, Text, WaitForSeconds } from "@needle-tools/engine";
import { Vector3 } from "three";

export class GameManager extends Behaviour {

    @serializable(GameManager)
    chain_objects?: GameObject[];

    @serializable(Text)
    labDescriptionText?: Text;

    @serializable(RectTransform)
    allTexts?: RectTransform[];


    @serializable(Text)
    code?: Text;

    isVisile?: boolean;
    showingData?: boolean;

    //private currentLabExec?: CoroutineData;
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
                yield WaitForSeconds(0.85);
            }
        }

        this.ShowLabData("Pausch");
    }

    public ShowLabData(lab_name: string): void {
        if (this.showingData) {
            this.stopCoroutine(this.DisplayLabData(lab_name));
        }
        this.startCoroutine(this.DisplayLabData(lab_name));
    }

    private *DisplayLabData(lab_name: string) {
        this.showingData = true;
        if (!this.isVisile) {
            this.allTexts?.forEach(element => {
                element.scale.set(0, 0, 0);
                setActive(element.gameObject, true);
            });

            for (let step = 0; step < 20; step++) {
                this.allTexts?.forEach(element => {
                element.scale.set(20 / step, 20 / step, 1);
                });

                yield WaitForSeconds(0.02);
            }

            this.isVisile = true;
        }

        if(!this.labDescriptionText) yield;
        else{
        switch (lab_name) {
            case "Pausch":
                this.labDescriptionText.text = "";
                var data = "Title:\nFor Fucks Sake!";
                var stepsize = 1.2/data.length;

                for (let step = 0; step < data.length; step++) {
                    this.labDescriptionText.text+=data[step];
                    yield WaitForSeconds(stepsize); 
                }
                break;
            case "Mcarthy":
                this.labDescriptionText.text = "";
                var data = "";
                var stepsize = 1.2/data.length;

                for (let step = 0; step < data.length; step++) {
                    this.labDescriptionText.text+=data[step];
                    yield WaitForSeconds(stepsize); 
                }
                break;
                break;

            case "Tesla":
                this.labDescriptionText.text = "";
                var data = "";
                var stepsize = 1.2/data.length;

                for (let step = 0; step < data.length; step++) {
                    this.labDescriptionText.text+=data[step];
                    yield WaitForSeconds(stepsize); 
                }
                break;
                break;

            case "Satoshi":
                this.labDescriptionText.text = "";
                var data = "";
                var stepsize = 1.2/data.length;

                for (let step = 0; step < data.length; step++) {
                    this.labDescriptionText.text+=data[step];
                    yield WaitForSeconds(stepsize); 
                }
                break;
                break;

            case "Norman":
                this.labDescriptionText.text = "";
                var data = "";
                var stepsize = 1.2/data.length;

                for (let step = 0; step < data.length; step++) {
                    this.labDescriptionText.text+=data[step];
                    yield WaitForSeconds(stepsize); 
                }
                break;
                break;



            default:
                break;
        }
    }



    }


}
