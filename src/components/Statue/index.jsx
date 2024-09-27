
import dynamic from 'next/dynamic';


const ModelViewer = dynamic(() => import('./ModelViewer'), {
  ssr: false, 
});

export default function ModelPage() {
  return (
    <div style={{ height: '100vh', width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center' 
     }}>
      <ModelViewer />
    </div>
  );
}
