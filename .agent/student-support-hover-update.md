# Student Support Services - Hover Effect Update

## Summary
Updated the hover behavior for the Student Support Services section. Now when hovering over each service card:
- ✅ The heading **disappears**
- ✅ The description **appears** in its place
- ✅ The background color changes to match the icon color
- ✅ The icon color inverts (becomes white background with colored icon)

## Hover Behavior

### Default State (No Hover):
- White background
- Colored icon (in circle)
- Service heading visible
- Description hidden

### Hover State:
- Background color matches icon color
- Icon becomes white with colored symbol
- Service heading disappears
- Description appears in white text

## Color Scheme on Hover:

1. **Academic Counseling** (Light Blue)
   - Background: `#8e56ff` (Purple/Blue)
   - Icon: White background with purple symbol
   - Text: White

2. **Mental Wellness Support** (Green)
   - Background: `#1ab69d` (Teal/Green)
   - Icon: White background with green symbol
   - Text: White

3. **Parent Engagement Programs** (Orange)
   - Background: `#ff7f46` (Orange)
   - Icon: White background with orange symbol
   - Text: White

4. **Competitive Exam Guidance** (Blue)
   - Background: `#5287f8` (Blue)
   - Icon: White background with blue symbol
   - Text: White

## CSS Changes Made

### Updated Styles:
1. **Heading visibility on hover**:
   - Added `opacity: 0`, `position: absolute`, and `visibility: hidden` on hover
   - Smooth transition effect (0.3s)

2. **Background colors on hover**:
   - Each color variant gets its matching background color
   - `.light_blue:hover` → `#8e56ff`
   - `.orange:hover` → `#ff7f46`
   - `.green:hover` → `#1ab69d`
   - `.blue:hover` → `#5287f8`

3. **Icon color inversion**:
   - Icon background becomes white on hover
   - Icon symbol color matches the card's original color

4. **Description visibility**:
   - Text color changed to white for better contrast
   - Smooth fade-in with max-height transition
   - Increased max-height to 300px for longer descriptions

## Technical Implementation

```css
/* Heading hides on hover */
.tf__activities_item:hover h3 {
  opacity: 0;
  position: absolute;
  visibility: hidden;
}

/* Description shows on hover */
.tf__activities_item:hover .activity-description {
  opacity: 1;
  max-height: 300px;
  color: white;
}

/* Background color changes */
.tf__activities_item.light_blue:hover {
  background: #8e56ff;
}

/* Icon inverts colors */
.tf__activities_item:hover span {
  background: white;
}
.tf__activities_item.light_blue:hover span {
  color: #8e56ff;
}
```

## User Experience
- **Smooth transitions**: All changes animate smoothly (0.3-0.4s)
- **Clear visual feedback**: Color change makes hover state obvious
- **Readable descriptions**: White text on colored background ensures good contrast
- **Reversible**: Returns to normal state when hover ends
