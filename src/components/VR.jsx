import "aframe";

function VR(props) {
  return (
    <div>
      <a-scene>
        <a-box
          position="0 1 -6"
          rotation="0 0 0"
          scale="2 1.5 1"
          color={props.collision ? "green" : "red"}
        />
        <a-box
          position="0 0.5 -6"
          rotation="0 0 0"
          scale="5 0.75 1"
          color={props.collision ? "green" : "red"}
        />
        <a-cylinder
          position="-2 0 -6"
          rotation="0 90 90"
          radius="0.5"
          height="1"
          color={props.tireProt ? "green" : "red"}
        />
        <a-cylinder
          position="2 0 -6"
          rotation="0 90 90"
          radius="0.5"
          height="1"
          color={props.tireProt ? "green" : "red"}
        />
        <a-sky color="#ECECEC"></a-sky>
      </a-scene>
    </div>
  );
}

export default VR;
