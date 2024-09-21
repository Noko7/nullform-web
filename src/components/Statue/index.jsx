// pages/model.js
import dynamic from 'next/dynamic';

// Dynamically import the ModelViewer component for better performance
const ModelViewer = dynamic(() => import('./ModelViewer'), {
  ssr: false, // Disable server-side rendering for this component
});

export default function ModelPage() {
  return (
    <div style={{ height: '100vh', width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'  // Center the ModelViewer component in the viewport  // Center the ModelViewer component in the viewport  // Center the ModelViewer component in the viewport  // Center the ModelViewer component in the viewport  // Center the ModelViewer component in the viewport  // Center the ModelViewer component in the viewport  // Center the ModelViewer component in the viewport  // Center the ModelViewer component in the viewport  // Center the ModelViewer component in the viewport  // Center the ModelViewer component in the viewport  // Center the ModelViewer component in the viewport  // Center the ModelViewer component in the viewport  // Center the ModelViewer component in the viewport  // Center the ModelViewer component in the viewport  // Center the ModelViewer component in the viewport  // Center the ModelViewer component in the viewport  // Center the ModelViewer component in the viewport  // Center the ModelViewer component in the viewport  // Center
     }}>
      <ModelViewer />
    </div>
  );
}
