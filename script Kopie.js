function b(d) {
    this.a = [];
    this.f = function () {
        this.a.push(new k)
    };
    this.n = function () {
        for (var a = 0; a < d - 1; a++) {
            this.a[a].g()
        }
    };
    for (var e = 0; e < d + 1; e++) {
        this.f()
    }
}
function k() {
    var d = Math,
        e = 120 * d.random();
    this.color = "rgba(" + d.round(e + 13) + "," + d.round(e + 66) + "," + d.round(e + 118) + "," + 0.75 * d.random() + ")";
    this.x = d.random() * l;
    this.y = d.random() * n;
    this.b = this.x;
    this.c = this.y;
    this.l = 200 * d.random() + 8;
    this.m = 200 * d.random() + 8;
    this.j = 3 * d.random() + 2;
    this.k = 3 * d.random() + 2;
    this.h = 10 * d.random() + 5;
    this.e = this.d = 0;
    this.g = function () {
        p.fillStyle = this.color;
        var w = this.x,
            u = this.y,
            v = this.l,
            g = this.m,
            o = this.d,
            m = this.e;
        this.b = w;
        this.c = u;
        var y = (q - w) / this.j,
            x = (r - u) / this.k,
            i = this.h;
        Math.abs(o) > i && (o = 0 < o ? i : 0 - i);
        Math.abs(m) > i && (m = 0 < m ? i : 0 - i);
        o += (y - o) / v;
        m += (x - m) / g;
        this.d = o;
        this.e = m;
        this.x = w + o;
        this.y = u + m;
        p.lineWidth = 0.8;
        p.strokeStyle = this.color;
        p.beginPath();
        p.moveTo(this.b, this.c);
        p.lineTo(this.x, this.y);
        p.stroke()
    }
}
var p, l, n, q = 150,
    r = 150;
({
    i: function () {
        var j, h = document,
			f = ('ontouchstart' in document.documentElement) ? 150 : 500;
            i = h.getElementById("cav"),
			bot = h.getElementById("bot"),
			bob = h.getElementById("bob"),
            e = h.getElementById("wrp");
        i.width = l = e.offsetWidth;
		if ('ontouchstart' in document.documentElement) { 
			//i.width = i.width - 8;
			bot.style.width = i.width + 'px';
			bob.style.width = i.width + 'px';
			e.style.height = (window.innerHeight - 166) + "px";
			
		}
        i.height = n = e.offsetHeight;
        q = i.offsetLeft + i.width / 2;
        r = i.offsetTop + i.height / 2;
		var x = function (c) {
			if ('ontouchstart' in document.documentElement) {
				if (c.target == i || c.target == bot || c.target == bob)
					c.preventDefault();
				var c = c.touches[0];
			}
            q = c.pageX - i.offsetLeft - e.offsetLeft - e.parentNode.offsetLeft;
            r = c.pageY - i.offsetTop - e.offsetTop - e.parentNode.offsetTop
        };

		if (h.addEventListener) {
			h.addEventListener("mousemove", x, !1);
			h.addEventListener("touchmove", x, !1);
		} else if (h.attachEvent)  {
			h.attachEvent('onclick', x);
		}
		
		
        
        window.addEventListener("resize", function () {
            i.width = l = e.offsetWidth;
			window.scrollTo(0, 1);
			if ('ontouchstart' in document.documentElement) { 
				//i.width = i.width - 8;
				bot.style.width = i.width + 'px';
				bob.style.width = i.width + 'px';
e.style.height = (window.innerHeight - 196) + "px";
			}
            i.height = n = e.offsetHeight
        }, !1);
        p = i.getContext("2d");
        setInterval(function () {
            j && j.n();
            p.fillStyle = "rgba(255,255,255,0.05)";
            p.beginPath();
            p.rect(0, 0, l, n);
            p.closePath();
            p.fill()
        }, 10);
        j = new b(f);
        return this
    }
}).i();
var z=function(){document.getElementById('fim').style.display=document.getElementById('fim').style.display=='block'?'none':'block';}
document.getElementById('imli').addEventListener('click', z);z();
window.scrollTo(0, 1);