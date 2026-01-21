# React + TypeScript + Vite

Hi! Let's talk about this task :)  

Variancy between card height in design and here is caused by the fact that figma uses inner border.  

I have added font letter-spacing, which causes us to have to have 2 separate variables for fonts. We could use SCSS mixins, or we could ask design to remove it :)  

Most of the colors I've moved to the separate css file, safe for one-off shadows and such. Ideally we'd work with design tokens, so all of the colors would be in a separate file as variables.  

Grid solution was partially *appropriated* from jira.
