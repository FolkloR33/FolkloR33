document.addEventListener("DOMContentLoaded", function() {
    // Fonction pour charger et insérer le contenu du template
    function loadTemplate(templateId, targetElement) {
        fetch(templateId + '.html')
            .then(response => response.text())
            .then(data => {
                const template = document.createElement('template');
                template.innerHTML = data;
                const content = template.content;
                document.querySelector(targetElement).appendChild(content);
            });
    }

    // Charger et insérer le header
    loadTemplate('header_template', 'header');

    // Charger et insérer le footer
    loadTemplate('footer_template', 'footer');
});