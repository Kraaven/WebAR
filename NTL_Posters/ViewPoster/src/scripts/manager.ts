import { Animator, Behaviour, CoroutineData, GameObject, RectTransform, serializable, setActive, Text, WaitForSeconds, Image, Time } from "@needle-tools/engine";
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

    public start(): void {
        this.labDescriptionText?.gameObject.translateZ(0.01);
        this.code?.gameObject.translateZ(0.01);

        // Print the current time according to the client
        const currentTime = new Date();
        console.log("Current client time:", currentTime.toLocaleString());
        //var interval = (currentTime.getHours()* 60) + currentTime.getMinutes();
        //console.log(Math.round(interval));

        var interval = currentTime.getHours();
        if (interval > 12) interval -= 12;
        interval = interval * 60 + currentTime.getMinutes();
        console.log(interval);
        const sum = interval.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        let lastDigit = parseInt(sum.toString().split('').pop()!);
        console.log(lastDigit);
        let RawCode = lastDigit.toString() + interval.toString();
        RawCode = "6278";
        console.log("Raw Code : " + RawCode);


        

        let digits = RawCode.toString().padStart(4, '0').split('').map(d => (parseInt(d) + 7) % 10);
        [digits[0], digits[3]] = [digits[3], digits[0]];
        [digits[1], digits[2]] = [digits[2], digits[1]];
        let FINAL = parseInt(digits.join(''));
        console.log("Final Code : " + FINAL);

        let newdigits = FINAL.toString().padStart(4, '0').split('');
        [newdigits[0], newdigits[3]] = [newdigits[3], newdigits[0]];
        [newdigits[1], newdigits[2]] = [newdigits[2], newdigits[1]];
        let decodedDigits = newdigits.map(d => (parseInt(d) + 3) % 10); 
        let UNCODED = parseInt(decodedDigits.join(''));
        console.log(UNCODED);



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

        //this.ShowLabData("Pausch");
    }

    public ShowLabData(lab_name: string): void {
        if (!this.showingData) {
            this.startCoroutine(this.DisplayLabData(lab_name));
        }
    }
    private *DisplayLabData(lab_name: string) {
        this.showingData = true;

        if (!this.isVisile) {
            this.allTexts?.forEach(element => {
                setActive(element.gameObject, true);
                element.gameObject.getComponent(Image)?.setAlphaFactor(0);
            });

            // Fade in animation
            let fadeTime = 0.75; // Total fade time in seconds
            let startTime = performance.now();
            while (performance.now() - startTime < fadeTime * 1000) {
                let progress = (performance.now() - startTime) / (fadeTime * 1000);
                this.allTexts?.forEach((element) => {
                    element.gameObject.getComponent(Image)?.setAlphaFactor(progress);
                });
                this.labDescriptionText?.setAlphaFactor(progress);
                yield;
            }

            this.isVisile = true;
        }

        if (!this.labDescriptionText) yield;
        else {
            let data = "";
            switch (lab_name) {
                case "Pausch":
                    data = "Pausch\n\"Lab of HCI, Game Design,\nSound Design, Digital Arts and XR\"";
                    break;
                case "Mcarthy":
                    data = "McCarthy\n\"Lab of AI, Machine Learning \nand Data Science\"";
                    break;
                case "Tesla":
                    data = "Tesla\n\"Lab of Robotics, IOT, Embedded and\nOperating Systems\"";
                    break;
                case "Satoshi":
                    data = "Satoshi\n\"Lab of Blockchain, Cyber Security and \nQuantum Computing\"";
                    break;
                case "Norman":
                    data = "Norman\n\"Lab of Cloud Computing, \nUI/UX, Web and App Development\"";
                    break;
                default:
                    break;
            }

            // Text typing animation
            let typeTime = 1.2; // Total typing time in seconds
            let typeStartTime = performance.now();
            let typedChars = 0;
            while (typedChars < data.length) {
                let progress = (performance.now() - typeStartTime) / (typeTime * 1000);
                typedChars = Math.floor(progress * data.length);
                this.labDescriptionText.text = data.substring(0, typedChars);
                yield;
            }

            if (this.code) {
                //this.code.text = Time.;
            }
        }

        this.showingData = false;
    }



}
