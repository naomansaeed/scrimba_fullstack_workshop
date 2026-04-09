function getLabelHtml(text, sender, ...staffObjs){
    // 💡 ...staffObj automatically becomes an array: 
    // [{name: 'Sally'}, {name: 'Mike'}, {name: 'Rob'}, {name: 'Dave'}]
    //console.log(staffObjs);

    // .map() loops through each staff object and returns a NEW array of HTML strings
    const cardsHtmlArray = staffObjs.map(staff => {

        // Safely grab the name. If missing, fall back to 'Team Member'
        const staffName = staff.name || 'Team Member';

        // 💡 Template literals (backticks) let us inject variables directly with ${}
        return `<div class="label-card">
                <p>Dear ${staffName}</P>
                <p>${text}</p>
                <p>Best Wishes,</p>
                <p>${sender}</p>
                </div>`;
    });

    // 💡 .join('') merges the array of strings into ONE continuous string.
    // innerHTML expects a single string, not an array.
    return cardsHtmlArray.join('');
/* 
- add necessary parameters
- update html template where *Name* is shown.
- return html template for each label
---
`<div class="label-card">
<p>Dear *Name*</P>
<p>${text}</p>
<p>Best Wishes,</p>
<p>${sender}</p>
</div>`
*/
}
const text = 'Thank you for all your hardwork throughout the year! 🙏🎁';
const sender = 'Sam';

// Select the container element from the DOM
const mainEl= document.getElementById('labels-container');

// Inject the generated HTML into the page
if (mainEl) {
    mainEl.innerHTML = getLabelHtml(
        text,
        sender,
        { name: 'Sally' },
        { name: 'Mike' },
        { name: 'Rob' },
        { name: 'Dave' },
        {name: 'Sam'}
    );
} else {
    console.warn('⚠️ Element #labels-container not found in the DOM.');
}

/*
mainEl.innerHTML = getLabelHtml (
    text,
    sender,
    {name: 'Sally'},
    {name: 'Mike'},
    {name: 'Rob'},
    {name: 'Dave'}
) */