import './MyLabel.css';

export interface Props {
    /**
     Text to display
     */
    label: string;
    /**
     Label size
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
   * Capitalize all text
   */
    allCaps?: boolean;
    /**
     * Predefined text color classes
     */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
    /**
     * Custom font color
     */
    fontColor?: string;
    /**
     * Custom font color
     */
    backgroundColor?: string;
}

/**
 * 
 * allCaps: boolean;
 * color: 'text-primary' | 'text-secondary' | 'text-tertiary',
 * fontColor?: string, texto del span
 */

export const MyLabel = ({ label, size = 'normal', allCaps = false, color = 'text-primary', fontColor, backgroundColor = 'transparent' }: Props) => {
    return (
        <span className={`${size} ${color}`} style={{ color: fontColor, backgroundColor: backgroundColor }}> {allCaps ? label.toUpperCase() : label}</span>
    )
}
