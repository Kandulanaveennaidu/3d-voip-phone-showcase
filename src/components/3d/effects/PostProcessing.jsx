import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
  Vignette,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import useStore from "../../../store/useStore";

export default function PostProcessing() {
  const scrollProgress = useStore((s) => s.scrollProgress);

  return (
    <EffectComposer multisampling={0}>
      <Bloom
        intensity={0.6}
        luminanceThreshold={0.4}
        luminanceSmoothing={0.6}
        mipmapBlur
      />
      <ChromaticAberration
        blendFunction={BlendFunction.NORMAL}
        offset={[
          0.0002 + scrollProgress * 0.0004,
          0.0002 + scrollProgress * 0.0004,
        ]}
      />
      <Vignette eskil={false} offset={0.2} darkness={0.5} />
    </EffectComposer>
  );
}
