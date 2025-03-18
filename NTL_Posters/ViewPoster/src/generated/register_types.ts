/* eslint-disable */
import { TypeStore } from "@needle-tools/engine"

// Import types
import { Fake_Colider } from "../scripts/FakeColider.js";
import { Gold_Object } from "../scripts/GoldObject.js";
import { GameManager } from "../scripts/manager.js";
import { AR_Door } from "../scripts/OpenDoor.js";

// Register types
TypeStore.add("Fake_Colider", Fake_Colider);
TypeStore.add("Gold_Object", Gold_Object);
TypeStore.add("GameManager", GameManager);
TypeStore.add("AR_Door", AR_Door);
