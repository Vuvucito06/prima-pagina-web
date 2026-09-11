"use client"

import { type FormEvent, useState } from "react"
import Link from "next/link"
import { ShoppingCart } from "@/components/shopping-cart"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type Card = {
  id: string
  title: string
  description: string
}

export default function Page() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [cards, setCards] = useState<Card[]>([])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setCards((currentCards) => [
      ...currentCards,
      {
        id: crypto.randomUUID(),
        title: title.trim(),
        description: description.trim(),
      },
    ])

    setTitle("")
    setDescription("")
  }

  // 1x1 Pixel Solid Grey Base64 Image Placeholder
  const base64Placeholder =
    "data:image/gif;base64,UklGRmYoAABXRUJQVlA4WAoAAAAIAAAAHwEAHwEAVlA4IB4oAAAQ5wCdASogASABPjEWiUMiISEVOU34IAMEsoBkKjlLP/B/Kj27+N/Jv6dJP9F5mfXFQFXdnKo5oY3/nHXQX57VOs/xLwlMfnuPEceeBPyshGjMlXmz+UQKNW1IQAFlq6NoAN0sd0OcN7Ld0FAnb8TntnsLliv8N936YwejzUdPF65PN1unrVhwljSUqVshRhUB2goUSLn6XJ09FVJj3usZw4gluuomkxghgeqWgGueYmek9lbeZN7QleNxOoCEI9Klat7jnPhP9cNSstqN34+Gy+xV/qsFviBIC2qc5DnuGqTPECo2qwctS/nMfF1X3f7awg5aSH5h5Kaj2xnfSSi/57+VVOBmfbLbiw2cfhNKs06HmR3FgnV5dktTETcDNAXM2nAr0l+Flan/1NXwC+jI3DeEStr6ERM/MZ3u5Z+Klpcyip33JRW+SapT1ao6qxknE5WnUahcKHwJCkjpA4HCEERBd1rWgnckm28it9RJZYH1QyAvfwJhrr9oLDaDb/Rtt05xXfuUE80H5Ffl0A9Q9wPVAUYdkF1q33f6CI4BISU2HizK2rNF0P85Ktvo1UWUarwVqYvq6vRK+j6qVJ46Z2m+9I1uuUWRzmVJBlDf9t9T1IYOrm4G5eVAWHpvEK6ISSEsv9uVuhi96LlZjN8yi1riqsxZ0qAciquiU+umGRBtHDRapeUKJCIoeiwblr7x4WagM2mNcCY9TMMzbUVM6CaCmEPSvE9717a6ox61gxXbci+OWwmJz6iFbGSGpJ9WmwlOtS2w4ljxK71SVhvYAlxoeIPjFx6hE3VoZGK2tyCHCdNHfZC5EmXANPs8pGHd5yE231zK2BC6NpT39+6RNyLT4n1mqRbqneJ5i/nRUHGZVqm2ED8f69r+qdy0pE+BzgMMsfRwzwlN9HUP1jVNav6sFXro+RyRhNdZMKvygS5DILYvH1cCyCvO8cDzcz9xNd/D80GZvj+mzJM+OECxywu0LuCMAYcBdr8DLU24mVju9Gl3SJk7jfoPYc1kj50zhqmWS8kYvXsnWkUpO8kq4V1JS8yp4774I2RO9K1DKAdp8c3gpOYID6xvCveEN8yeg8/MdnFf2Iw52eIAGsQ6EIsqOUfYsveYvdLBLd97WRvxN7kNGeJNSp5f0b2kyH/EF0SBZ9vo7vJLJv38lh0/NJ5Fx8iX6IV0YCxcKMTogm8wm2mOu58+ctaPyedH0VEAcYDeD1P6fYqYlkX9tYCKzHsxtI/2p1s8ub+/EoJ8xmkYK4F0de9GRhsU3LJ9gihLYXQeUC+ZxzhvvXdFFiVah+3bZxsQ3zIh+N14JbfaU851xT+WH/QQs8vyC06aAwEDsrGcc/4Gn8fnOQH0i6jthsvn5DppTeRrh+iYFQijPLhR63YcLvffTtEL24wk83dTvJyxAd4H4dQAhOGjFyU0UTGXAL2d5VI77vVPufJFjxDvn2hrcz62m/DKPyUnO3F245GgAJ9qlhQh7sVf9fXRvpL/38LYJ4IRpe4qMIAegeivSE/iGntBBaHF9otBbZuMfLFDGUsbMaJsxxuUZ2YXO9af0ytQW8fBSBBWttdivsifgSIiC8KUzxE6HVAh2YTAVJu0jEIWdf7W9vJAK2zktrxhypj7wjQa2KHQkd9eFkfW2Bnq0iYtJjTv68kjPdHsj9xBhLegz4jiO9+ghB/1g6GbWqZauuOqP0oOMKs9a7WF13uEIeRcML/3qQvS1D2KT9+m/XqIi00p1h9duFQIKoRD66mwm+YAi/iQVqw8/fLBGDHJGf/uOFaO6jli8SJWP5AemZxAHiv5r2/FMr6zehm3W8G3VgB/wtWCVJe31jUCjeD/jxM5pd5oN7wQvGX9TfNrl1SPuQE3EItcXzKiHBObyjznbpakxXGaoJ9jHTGi3x3vjtqEvqzMGusx2mESMHrCIzXPoPPIM/7wrcQi5y83beBTuUjSbPYONNs1dQKmROLvW+ZXeOamCilwTn/9AYSN1ifEjP5MgfbgmDp7dC0LfyDTct8GyEwJ1sT+9VkWCy+SHMedzxS4wCJwF9EQojSzKogXTC4M4bd9m/Xmfp4hW19TBDfLLCeVNHs2S/Yo8PHo6GoBRLvRaWYYvOOafaq/gy3HMmz9oNEjeIlBIZ4Tct/gBBp2za+dcuI95lCKPMkD4C3TsAQtnNHSkhvT1lKCCibLiWOTkRXgyifMGew4aynvqeW+uttG2OqdubflA2AGKjhYzrpDVlP3/iilSsXV8M9bLl/i8VSV3h3DZ63Qo56DCG+XCzAjAaWNs1xgrIhj10IugH9TvLDMK8chmNJVORn3NbRsmSaZDERn/UIzJ0NLFfBxyiG5KNHh0HpdD0acYTlmlufyyZOoJ8vpp6PMeAi/NIP9GCghbV1Zwx8qPaMGfYWLs6iV3QYdnchObQlUkMjtKUmKQlHEbng38uVIFYC3EA8dNA6zBqLyQtDlZrft4cTXbjAkaOKgFzAA/v6rmMkaN32wWtt2birt9Id4AbfQAv0gTGlenbfDle6ffcp27ZOgBbIzS5o/oh9Sq8sk3vu4j8D1E0uLGMN/dgFpgNwAL+SRbjSHcq6uy02wPnJE9jo6ZjNNZdVVY/9a21bo4uZMlToeZlHPnhxhIqc2lxv0+in0z/v4YPj+knu4nE0rVESi30FxSWA71cqaj2GWvlzzD5pzpXhm4tV/w3ao3ZhokFrBe26LoRsHl8B+7iXg8JFeex/vCeAtd5sJrb/AMZ0KXSV/0JQygh9oqfiUT2Ekd5CNld2yPaWuWAh+av2uvyJB5+iJnsDyA9OkI0MIT8unDKeb2Pc5xlY46+KotuREaKZKmpthCkgMoOvuer9JGLp2YS9XPt29fDXWGD36iIoGsq0LiuzsXnjQyszeaTkenu3u5wJhJuXxOGNaaBNW+fjfDR8N491nR1DM+11u8RIXYEdS2rz5lR/+2NWDPs1AyxVf2T/efBeusRt2l/8eYoH5kQUpRmoNV+tKXecc5/GGV2QC3hPK5vmH/GDIeeTf7e6gYHRbECZEJE328aEfCG4U2mQtb8JJBJmKytw5+Kq9DJqvi9Ekb1zut9a6GQW8KqVNLrW1mmBg9tvQecKuXyF3DhlRvp0AyhIsQTnhieWwJtKQHcIZb1Ir6UeSazZRocY+KaxhZD3lI6gBvdGTkqX2gGmxBherBRSidZSMvPrbiP4TeyscYIRZATM9x3t1NzubqSdJHDXssFqwwDQnJt843dq+XbhZJy858bR3F5u19bLMDMFgnMw66725V5Y7+vOubc2vC7y+A3YVSjooIB1qxrcnx3KvAuUwH+F6THxOJkQcy2f/r4NsIE+ECRT9Xm3C7cZ1DHKrxosumLBbEpAvYqIXxt/za+fG1C14DKXKJi5HsGgb6N+Z/9ytXeNMcuJs7KyoCtQFmIzo3T5Bp2UeSFc4XDQBLui3QQdhTHkvw5obLka0AZ30TdK3L1q45O6AvTbDb+5bcHygbE7+V6dCK1slIQGq50DspkOWBnxIfDMTGVDCosSh9njrRkn+nEshT9Ez5kGuyfhIGUhel+Ctz8xQUEY3weLHI/goG/OtXKC1ET9vbZsYPTa7BzJ+GVmidmmyDmcwNJnblRXaCiQmTLM7o+YMtJdnOfJQBNvpin2v8JpRR0S7W26lo8u5e+wndVhFRnXoXytnZIIeyfqzhW/ocjEpBiEJbc39gORKOL9fp+QuYILUqSGdSac++kYGdnUYcOZDkqdnAg1RaKIyYgI+RQZsyPV1UE26l7IgXDVOmOvAAQUwpotzt6w4xgp68TulrWYoYQanFQaO8cCaSVxsIITYRkJBuFyOivjtEQyupsSWn5vgo8ZiGyd/MWDZzhh1aI8JCp9lpRpjTVRdJGJjTYWgPDualTTgDmkvMCq4wFcV26eMPOBLTtJraeqdjSZZ8LcBw/reXKMjJOc3ktFbwJWsFtjsr/3Ei5B5uzXRzeXsep06z2GztzlEWo5ycezuBLlHn/equnBLc1MFnOJW+ybca7Zgfj/nOvZqoq8DbToke9syTzukLuvsIyjP+RAYHqprS248RYWrbOI3CR2k2gKGFTBG8/DEpj4O8hxHyWRYq2ptQ0ALMzWpA/ui8HdXVDwjU46NUp723ugTbyZeLxA5181LVn3xOF1Z1O1OKzDjDcMiygbW/pyN1ooDUo7IAf0mrFbomuQ8NF0qv/+kwLzD68jt2K+GqZyyagZ0/VgkYzU3uJTfR7Prww7b9CvmO0fzN3+42qdnny+br61q7a6l490JV+BN9hXkOfpad351XaHKuiGyvI5h5SGypJZt+95UESukFVPhciCJEYJL+GJsMLPFelx6t3XmR6em8AR9TVDkDYdgj+Rh5EqzwCdcNwy8CralImzgfQnrYaGo7L2y2R6wwSvM+8vKYkQ2S9a0PZL3ZHVS0ZRlLBrC6cUgmhB+H8nqd4MbSBA8BQFoey3W18X4ZdZonBkZYria3e6E0OL7apLZk3M/BptE1eyL7AkEgUvt9ynnc1JfRx/JNiq5dDHLbaE/xOAI/N2e/cL7BCcfkfj4Lngo2GquA27+EGXSbRCdoLWtLUaRIbuLTfS7yAzgja/s0WrGKD3aCvGn/8rgMCRZW6nmcDU4rOUFPzV0Jv6lLzRow1D2Bc/k2l1UBfTtwLnxeS31uKdHFPBMdY4r2+g9Aj5uaafWgsoriYLCDlGifckOU7kMNr2nBsSZ9LPBIyUQIawRNu+YgoUIwva2j3j9+H4FXNep3UeDZ9qBwBvgrvRahojEsnnazVT+Ca/EmNx7qsd3Z+0XoLeaIjbp2s8ScYSd7lh9lQmMa9iNZL9NLPaosJyqmbiNUWpMQ3Ad/AB1n3VRLH0zLVY/mzOhpG/0zWogrlYXwrDQz1DkMOeGHyHwRnkjX4ZFOoOzTrvZIVRIUBa0mPZgOLftaogkbjlefMNyBXtxLlQxgmzxmuBMuLl9YZo8eSGeUwCXgnM3vL+k5r99X/oeofrE5tBikXM7CSLHYjK9PmH1Yl/zzStkerZw71b8OAohZxkJuooeENWlSzDZN7MRy/Wp/5B3kQ91AM1Z/kUjBzfHacxjZqgZldABdjFhhxQnpaDPCRnRWebZwJh22YYaTtfwWz7upEA9wIF1b3e+fzXYop18IjpPDfeO8v5LpdWoxeoX5rAwYZzws5BPW5Rp4A/BindImytSHqDGZPKzYijyvJIZu0umuelygHssint37PrUBjXXgOoy+0YecdCZSk/TXZP0OE5ZWKKA3pwgurB5fgYwYMNptOTa320j1RbQVtLB0MJJuU9X1nJBo4nZ55Vjwfy40n9gqXHDv+RMoBssbikgiqKOc5S1t+KEBKQZCTw/lQ6yXMSk9c5Evi1TaUR/HledGNcI0CxsX9UuoUyvHUi716gNt9HdNvHnpBEeVsBmT1/xsjjC4oOh0KZoJAUrS6/GcCjaRZHPwEQjrYKRgtzPWN8MMlzt8DxWYf7GFWPYoaRK3sX4qdIpod7xSP/d41Pnc5USL2AVojeAn4MGW1TptFI2F1oNcPmR27mb75JMm82yz0CepHsAYOXvUjuefx2oragPhmiiqvr0DqOHJ3ntnB2FveX0zwr9i7DYfYkmq/Z+5AynL6H3DF64n8m+Kuslq23iHyboG5nqRXu/Db+3fDrmlx3MHt6e25EKPIOsd6MDXhXdu5TNZ5tYPtrSHTOLYMr/i0c/JgWnE9XhwPocASq/yGATLoMIgjo5gbrP9V8GKZ5M8WESt275B3IfhY3NRJRv5SJN7BISsVh5DophKaMnfJ6MJ0kwRBGCtU67pYyYhi8Of7/5m9YQSR7+Lj8R19CTmFK5HQQwrj08y4Xch0KTCCoprvnWCSC53U++mScW72U46H2Q+Ha/3I5BiSwmJJ58p6JOmMxT1EuIyaxJ1Vxzu+i8TlYCR8W8ZZWE9gZBJ1HdQRlgypF3mcW/ji7jzlGGcInqIKXOoyLJ/nvpz2ItjqWUz8dV6Su9Avu3oQ4kJ+cml/MWdc60JsdfYKZ6RiLfCr/n0GIv8lDBJ+fGY+Gz/ojABxWBY1zLMBodIwq9X2GYlNVb2Vl8N8faTJi0KOW+P+zoaQcbDcS9vmI2AmBniO+EuSFglKyv9CZQXtWd9pao2FFpyf9Qz3N1JW8xk/4nxc9kA5CHjxxHQjdHvUJHUFRDGf/y5azjwjDAHoScglMEdSKYf+xET0ooXAU1GN5R+WSqCwB0uu5PBkeo+daU8mTuYAmBLFfOmIG0zaz9IV5Z3gobQeN8cCduaxXYXEkob9Jmmx9jgF/UrebGOkxK3YmAWNxwce/UnndRvrbLt/FIrC2XBIEl2Afs/dVoAj8XRpqSGLVM+SYWrDvXkKmXWEo62JvENLS5+7vp/anNnEYNJlkGb3+nwpBsZbYruDCdJKgesHu1xsxWuZghkr4F8LeMcUiDhyCGuMfPP6YYtQTXP61z3/7/eBjhDQJAp2zRDxXDjCG3t3uTPEjxtJwEg4H5hXEufTlbCSap004KlBU0J7RGME9VdezXjZl4opRJnEnOO+X7L7kS2IpdyIyxGcN7Xc3Ekz1FO2QMglQ9gWdbvD6zb25qd7i0U+m6zHarTmoG/2Et9Qy4XM2tY0i500sBWdzMyMIly+JUL5K++jvK8bauSk0hHhUfoZJbDFxtpywGkZLcdrosXigi8T7hLEAE1Apvi+xuIUc2HuNo5X929XrhfIvvtvQuNhfBo/OJRuYnL039WlSJx2nd/PpXJ2NF3kYfmGftQYQIKXr0PLTAZRLAX+B3NZKdm8caT+B9fqpC3b6Xbk7rGZ0BNo72JhSa/IulA/+1O8xAH3aOzr44CEc1puiWglPcD5q4iuHAcyg23gjNnetr0cC91xO0We+hu2/Zo5pJ0UKBq8GQKqAlK2jzgm+Xbt94WVomv7q6wr6ZKsbA3S/d69ZdhjFteQEJ+J4la+MBIau1FX9KZeVzz1nCt+xMAmdxzOQ/bgZv+UtCZ+8wKxP690PXfuLsS5ZIaFbrVOIeqHuYrET9ITooAWoZRFQBtz67AwHHvZG0CeBcaHAXuuSPwVyT6ToE/IYWSRjZaCRqlZMLozy5psY1+PlI5Eoc0TzWVY8Q/e+GY9RqgDt42dXAAG/HKChJrxnnAx76eYiUACGiQTHZ8a/IzydmzJq3GcqVhzzWMyDD9VzyuX9onj+yXulqwIaWBRtov8QPA9RBRlCB8BWQJiODFu5o85SxRUMG/PUFtvHArL7IFPcZ5aD8JMR9jWfF8jsU08fyLl02QhltlBz5txqy/juHpxY1zHJtkvdAU2g83ralVXwKEa7260FjRnirs6t8vAugtenBXVcC1qA0Ejt2Dz6iQeESVDvrAT9nUSp1kmRUJhtI78KBpio6ajkEWvIOiPcVMoAEVYmM4QWUS1Z+t4l0FBJ8S6ie1OWXBVNHZg/i+RIy5nBmbn8aLyeWA4Y5U1ybnQin9aU/bQcCjVWI5rMODWf9028vNvetSTQsdR0TbUwVQlxgKjK1W/ldHXm1UAQiqRQ/WwdLneJPdB6oi9Wh+OP3FXr1A88qyaaQNn7H6GWqBKe8nvNA0qMuHGoQHmAPtBXv/3Y9vnIt20wegcGErD4fcoiueqBOFiMqmR9NkbDuoV1SfVYQuUHmSqgFmFc9tzUDSyyTbn6D5/tkcSNspkjywmN5B+1TN+/EfiqEea7gAM/lzf2zKdVuJU9+0Zo3xRs9sXzsQdi4t601YsPUsnQFXuzxNeFKZ+R3916V/wXRXIgMABdj9VoCC4EHOmfjeEmRh+PiGp1X0s3EkpWZvlKCSqf2VzW3XEDNqoUutK930iNw0k88cXzie9U6sePjEjB6a7Bs56LNMeHYNV1ugyHABFIAQ8SxwLDyOYp9GBOh3jEjpv/4ORSIfmLbMVGEkc8n1BQ03IkFQ/bnuj7HFA6RfS9Ds2Rz5qruWLMIkpP9LrTnuK3ay8D2RskFxGdNuwnuYTMXhAWTYcd5VRzzVSTWmhJCg7Q9OS0f9/YElyLUdGdJ01HpXXFPzYWKSFWZ/qhHQT6bC+JEGDE18ZQw497dgDYbnTF0bNRsMg+xyWRlB8eLjTB9PpuEwL3w10HIpe939Fb+BeW/kIsFkUQOI1okHp5nVIS32gYe8RG/1YFGTZkBTRPdlVHA081KPuiYaYbZuIaKibmihDiXNGrD1Ft3AKVtTelZtTZuGDYuCd/mB9HXogpXd+fJ2a0gcgr/qcS0RRvucga02fu9C42PvlEWNlyh9E3rZWHb2VQbcRvv4OKqTkMZvxXBvB0+wS2YWcoGfoBIKlHjSDZ20ySRQE8Tsu21Kd+b+dTjj2Z7QoMnXqG0jjP6h5Q+mnbTKq1eL3WnLKJnds2vFsDuLBmAmLDDNnroC+f6YATPi+MV30EfolqWHwiUXQPin25O1pATaPkPJtMsD7Lb2WY3KVIj8/8KBk0CUgs6QxhTRYpMKExz3bTzZt6+n9bNxXCLgFbZWt3ECLMnLwV/gDoPZYepIiQWCrPaR+TdEGVV1vzNKTv/9wR5uRdyAidIyAvbDuFa0E/f8xmG0wLk85+cQwMtUVnTGF98INJDq+P1KKd98Iy/oX4QcOn1ZurdzQp5AbM8SGdEQkcOb4CLIxuLAzu/GMcbgKLUeAVihCaro4fUDJ61jeBRq9+wp3D2/C2BdjPjJW54/kAtRWFb7S3r2yz3xfc7ByqNO83Vizcpi7kNsCNxtB+m8YIbuSJyQVQBcghMsUSCaJdNhPAm6B1KwpxtrIZdduXP5FycZiOIBC2gfCKc+vY5JdAytxi9r0EdNm215iJI3FHf2UZM2ZHmL7R9JkT+Hj+LPdNRarhV2OHkep5EokdCccOA5yKuhVbt7S3HVyeaK/Ad0leh7+p4pr+8bATRs3kUHHZcOUHHHtacZYwEEJ2enW0nFB7JMa56sVnUXzWzKcxbOVHBXuK33SZZimvsOATeCQfNw3A7KjfPyPMNa2hOwTZemtcxTeyrx5wB6Q63vIx82OQmu6UODPShE3i9cAcXkdyw7Is5gYOGmNV+ULEeqpXGoTyHizrX+oOw4G2SkHofUfbfrcey3fBHNLQ0bKscUlpK1uiPX10cOkgJ1HUqdxHRv4oKns1j20bHWaYYt+gt+CIQGQZlUrAYLa/gVNGW/Va1BJX+rbL/E2ESZw+mOH083Pqow+a4aQYtWSBGUOlOaNvxWfpmSHxYWKn8s5FWhu9AWemPWx7ejpuw10JI6HUKGivsD3na9iIkCQ24STrOnVLJhsZcTPO8Azaeyrk/aMjp1P24qZhtW3VB1kHWAgDYald7q3fvoLEsl9dZTAei+deKgW+5x9RJn2+Ezg+Mgt2lNnHNA+4UOYpCIJYFNVSmRg3E4QXj27uZvuCEI+6bXo0NAXMBlucvVQIZzt2iLBxwvV3VEdFMFIEVQI81KTI8OXmYccPLe5sngaPV7TRA0BPOPlqeBOQVcsCv5tSb/NlviRgNG2mHX2mduUvilI1HOv8HYxSF0SoXBBX9J/ZbtEr177fplNd5zU2IXik42Cc2ZcaEwRL4lwekUja+g85yfCcIMWm3TcZXB/ucsPEmyB5lb2MhK5qCJgsYar7Z7gqbdUX85WSMObAed/Kn+empoyb0flFcsX3IucFSYH/plUjxOyMkttM6pUXq9SoaTAwdxhnH3TNWwCLtE7t2ME+601lHs0Jyaj2yHE/OkleRkd4lzkRVXWFku2luPuR98CH7GCiXqQHwsUaIwKJiJfVrTFdbmGI8iOBB7JvctWfYtKTmmldA/Dds3RNEdkdoRmdG+wq5Kj8ROOB+laBfoc/CXS7KCTZaRjCjH/CM2VwyUMLpGWges4f48RCuz9EX2U6D+PoAA7yQxays0kwYH0U5bpDRkeZpzcHsRqE4eVhUEHRcYfUKcL89i1mQjGXA42LVb6GhOB8S97KGbJ2J2Kf4NHPsqTUvJmBLejiU7c+F2v1v/HAT+U5utodMiZw8P7RjEU8QJZfNqQQFVfnPioFidjFl7NwgCB0ESTalfBVZvvPeuO9wzRobayUSWTeQYM+3V9bbF7qhUVEMXjMaRnGNIkQ3kmHW8yzXBtTBrrfPnANm2DnbxJN20gE7E057CKutSJ0khlDYBIszK9tiGaDgoynooRuu6r65cY9meheC4HYNfGxdtGnWSzp5EN8UevjaMXCqOuhQvmpQHzbZgUFViLyMQYWpERhr9xcj4JCCgc94Abq35G609ij81eLSguqDA6ubF4vIS94qPcOl7wsfpNF4+sqj/4dBIKpymBHv+5MRGPxNKwciJKFuAiop6CQXpE2bLtTRq4IRnIi7nIj0uq6AbSkx3Mctf6u1vpMQM1+pYEZq9b7gJCTJsARTfhdagWPEwlEmaECgZOPYXzUdYH1XmDO6AxCxQ1yicqP4QW7zK/4nvfCmyF9I07KIV/YyzIxDdMFdKJCZIZKgTnPXpYsBZWngn8nwH52yj68uu7EQOaiNiE9dAOXw+Ur1owtGMaR7o36a7wAasI+bifPNXAqoAz+AJhx4z/2cA//DmUn/4nSxZBLXkNUPh4IQZJAHRBu3sI8SGP++MwTxVb9LhzA6Iht9mYMrAi4dJmzsTWXUMXl0zFt4ulbxtSDdVEI9WEABZ4Ezxf4gvN8F266sMy6em8UsfpOjv901KNVGIGQHITL4LPPD71x9Jfp1D1BN/zl5qDtC6+JFusUAGrWyR7YnWzvwrSWZLedqVxyV+CrpRW6vrRjWlBETeb1gXWwF7N9fJSh2VQzoQ5z3358Xf2WFy52VRUuHQ9W7Ib6O35BAhVSnGd7GaDI+zrqSXApEAtEoubhJegMK+HC0Hh9NhhhJgrk8XWOniT94jeJEx8oUE46T0KJu5WrlW4koSuKy4LdtDUmMjMXcIrxA5Y7/FHY1sQrbCMzTiS53oahNiXuKjLLCt+7mcxw0zRy5QF/YTLS9GaJIl/woVapHfzyO/lSxV6jVjx0fAsggr7WlnPlCxWWjHJHnFkc6o/tYCc7tZ4Q1GbE15gE11UA6RS0LKOA2DZl+6YBHlUx8wlRLXYJLUhh8nX0AXKZ3g5qXrpCdP/VP4AwDCj5JKaKeD9hbM0X1mko1/H8s4G7QXf9hBsgJNPC+1DeOh6LyRgrnp86ipdkHKjYVhcPeyuN1cLNirnIX/c6GQxRjr/B/Z6qX5d3CctdzHw8vhyJFJ0YTZ8LR5EonbCXrTSKem0+tDtO1Byom2G/djMwNPRsUGpbBvLBSQaTZSXeivQLAxITsInn1qcaSJVqs3cwxei+C7FEpeN/F8B3IQDfniC+2wLldbPSjdwBEc3bYvEtS4U/DG3RiRm6Ehjnv/Jvexd1Fg5TKRHCfdAn553a8FlmtK6fzVzAcYTZOUcT0jIdw/3mcVQr92DaVE7TqJxEtV/hDB95GE7wQ+S8FCzUiwjKS3BAjD5XU4rLr23QNVVYmB+0+uagrbv7LsqtMvLwSv1xNlHXKP5KSFNhDVDEIMHNHRFlhAwORkbz9vdAxzGilyMX3MNbU9MiBBUppNBs19lPYrzeG6jYM8JJMwlbR69lzqfErDG4PAThXCRqbihw/a2VSsXOpFiae/HqczUK6uEJ3h3Qx4pUpP/1KoGrUZqVkoKM9yS1M+TUBmrqc4wwGYpECIoXffUulCHXcmOS4aFWh6N0VSd7ERyaCZDZguwvLlY2X3V0f6ytimhPLuVfFou4yiZftiNPrfEVubh/mFS+jNoiUOokqITuW31QAXqUvQ7G8i2/4xKfp9Yivohh37flLSLGFDd46jvxTqITNvShjcVlci6y1U7xET/70mGmyjxMdP/+2uZtWsRWxA8Nu5iLn2QNpY0vcvVw1cRrNP4OVhg7BnhkZy6IKO5dIGy3LE6HCWzJP/9bWcUApseN7c+bK22rFpb1qA3RvwprUiu49E4wvQNZSzPG8UgKaFWENqYVXpqOvaHI11Mw7bZ4fHa/BHvHARqpmY3IoLamclxn8wwQDGlj7sy7KALjgShthEBpsm/MZSQ1N4GoDqp4Q4y2Gn5sOxM92qcTyQPYaQxSf6kvokvzNx4y8uCMjiyohcJ/t12yye2gCvR/LBLOl24hWeDNrKFYJNmWvdhAsgV3BE4gH3HnNJTz+au93KWi8zuTent4u2Up2C3vJPRw4rnCU66to7O5c6j9sPwcj5xwl81Mhcbo48h7PsfiZ62wo3GWatQoFjnKW2XBZl2uyomNBONBSLiM0SLW/aAcZMjGRuH2nQSatPp2vgJ1loH2qHHVf59vWylkUpr9OGJaknTGRr37TaLkya+98KWkqOfOcVB5FZeIbb+ejXIwkLTy1sE39UjIpzNxzjp56U3qpdx4qZGln0NkudqoFAU4x9bEm9Ge5u3ISPBoX/4Ib00gBbSGesRIHoajjTjonB2ock7LiYy+b9y7yUqRZtULzXrRaiUZ26FGY9cR+Kg9/zr5fufGJIAl+Oz2Y2y3/1dgrRmjKTaHJpeOp5fhiGchyD2rucbNAnXKGwZbpaQYJx9n1DgBh7vgw1M18F3z62EZgFwbWQEKhQOVCRtJOGqQEDNzFaqRc6DT4xPk/lHP8HzZGuPDODFq+lqKcBq0peUrmxYG39PpmDz4xi7xMITJyRDfXzfrBy6fdzphEVYYsHFZN3nLDSjD+UNGwjXKnXaNGLkomN5AIqujX/RTaZbovd4m6tw4LVpbDJMQ0t5/bR7AfwqDc9aARudMRl9ILgoAercUdb5G/wUdpimhNg4CENLWDPRGaAAAuWf2l/gjXbR4D2uSKOCehgVGtnAHcCfp7rvo6S1PWji6KwwZozOoAjqUefKkAhLBwjsAEa+7f/yTHjdyJAL/0lvKR+QysBT/2BC61NuZmJi8KkZUPMJZVB/LKV4XCM5fgJxhNNUnectFuW0ZTIRU1sJUjqTlLwBsLgZsXknD70944jkVMSlN+tIx+grmYrmz0qlPNap21z1T5LiXYTLcANtnlMjxAZANGk5SMSx6daTMFijE2IctIS0v8nGDAsIc3YhXkp5zgFtHxpJvkA3PHRsj5+SRTUzKaP9ZifNCFdsBtmYTcGtqIl465L8YlOaRU9gS+E59f4dRyK0rR8OxVjTGq5rkhrceZjth5HPTfK3rq7oSHV54s50HRxmEa1qX3lb111Yf3wJRw3ebCdlg3KENYe+dNykVo498BZSpAQYudKBf/wrFCs5s8z0+dTP+lqbK7WVF4Q78ituBdj0t9Qfl4m0irq3zHsgUabJaznSkIUUF7QMl2p45v/Jw3Ho78LCailyCN6dSIK4RYHWk36DnBKc0qvrjj+7/dn7QscV/sZoyc4iAp4rqhIra5mt0Mb2Pa2+REByENJvPw9ayI+HzF9T0vzDlOBhVv05OJojK2Cv52nLi21ycgUx2zLWIhuWm7GtlMExRhE+ZgQbbeQ0rfqGQKs0jn68gt0anagv+cxi0DhberfswkotLp4Yg8US+kwEWco+vKv70JoKJaoS+iZw1sIr02ZTdX/SVzSfR5cM2AFNltdr4c/By6Djm10bsC9cBNVaMuqCMARQB9B8u3bVQQ0FE+w79TBLXeR3IHoJ6yX5ul0Y249aR04ROqdTZfNCnCIgUlodeO41DOY4KYMMkdvMCyoeXh2laDOtcNr7rTsvaImILPmI8lCy2oLUS36TUqE6QKv51rclKbeOwCagatZCG9B8AARVhJRiIAAABJSSoACAAAAAEAMQECAAcAAAAaAAAAAAAAAFBpY2FzYQAA"

  return (
    <div className="mx-auto max-w-2xl space-y-8 bg-background p-6 text-foreground">
      {/* 1. ANTET (Heading) */}
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight">Titlu Simplu</h1>
        <p className="mt-1 text-muted-foreground">
          Un subtitlu scurt și curat.
        </p>
      </div>

      {/* 2. PARAGRAF & LINK */}
      <p className="text-sm leading-relaxed md:text-base">
        Acesta este un paragraf simplu. Poți da click pe acest{" "}
        <Link
          href="#"
          className="font-medium text-primary underline hover:opacity-85"
        >
          link simplu
        </Link>{" "}
        pentru navigare.
      </p>

      {/* 3. LISTĂ */}
      <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
        <li>Primul element</li>
        <li>Al doilea element</li>
      </ul>

      {/* 4. IMAGINE */}
      <div className="aspect-video overflow-hidden rounded-lg border bg-muted">
        <img
          src={base64Placeholder}
          alt="Placeholder"
          className="h-full w-full object-cover"
        />
      </div>

      {/* 5. TABEL */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nume</TableHead>
              <TableHead className="text-right">Rol</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Alex</TableCell>
              <TableCell className="text-right">Admin</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Maria</TableCell>
              <TableCell className="text-right">User</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* 6. COȘ DE CUMPĂRĂTURI */}
      <ShoppingCart />

      {/* 7. FORMULAR ȘI CARDURI */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-lg border bg-card p-4"
      >
        <div className="space-y-2">
          <label htmlFor="title" className="text-sm font-medium">
            Titlu
          </label>
          <Input
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Introduceți titlul"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="description" className="text-sm font-medium">
            Descriere
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Introduceți descrierea"
            required
            rows={4}
            className="w-full resize-none rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <Button type="submit" className="w-full">
          Adaugă
        </Button>
      </form>

      <section className="space-y-3">
        {cards.map((card) => (
          <article
            key={card.id}
            className="rounded-lg border bg-card p-4 shadow-sm"
          >
            <h2 className="text-xl font-semibold">{card.title}</h2>
            <p className="mt-2 whitespace-pre-wrap text-muted-foreground">
              {card.description}
            </p>
          </article>
        ))}
      </section>
    </div>
  )
}
