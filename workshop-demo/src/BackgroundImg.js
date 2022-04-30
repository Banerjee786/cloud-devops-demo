import logo from './visuals/EventFlyer.png';

function BackgroundImg() {
  return (
    <div style={{ backgroundImage:`url(${logo})` }}>
      Hello World
    </div>
  );
}

export { BackgroundImg };