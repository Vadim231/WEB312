document.addEventListener('DOMContentLoaded', function ()
{
    const phone_Btn = document.getElementById('phone');

    phone_Btn.addEventListener('click', function ()
    {
        const original_Text = phone_Btn.innerHTML;
        const original_Style = phone_Btn.style.cssText;

        phone_Btn.textContent = '📞 +7(913) 365 11 08';
        phone_Btn.classList.add('show_number');
        console.log('Телефон показан!');

        phone_Btn.disabled = true;

        setTimeout(function ()
        {
            phone_Btn.innerHTML = original_Text;
            phone_Btn.style.cssText = original_Style;
            phone_Btn.classList.remove('show_number');
            phone_Btn.disabled = false;
            console.log('Кнопка возвращена в исходное состояние.');
        }, 120000);
    });

    const back_Button = document.querySelector('.back_button');

    back_Button.addEventListener('click', function ()
    {
        console.log('Назад, к списку.');
    });

    const similar_Item = document.querySelectorAll('.similar_item');

    similar_Item.forEach(item => {
        item.addEventListener('click', function ()
        {
            const name = this.querySelector('.similar_name').textContent;
            const price = this.querySelector('.similar_price').textContent;
            console.log(`Выбрано: ${name} - ${price}`);
        });
    });
    function update_Time(){
        const time_Element = document.querySelector('.meta_info span:last-child');
        if(time_Element)
        {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes().toString().padStart(2,'0');
            time_Element.textContent = ` Сегодня ${hours}: ${minutes}`;
        }
    }

    update_Time();
    setInterval(update_Time, 60000);
});