import os

back_to_caption = {
    str(i): {
        "scenery": "",
        "season": ""
    }
    for i in range(1, 41)
}

back_to_caption["1"]["scenery"] = "office"
back_to_caption["1"]["season"] = "summer"

back_to_caption["2"]["scenery"] = "office"
back_to_caption["2"]["season"] = "summer"

back_to_caption["3"]["scenery"] = "office"
back_to_caption["3"]["season"] = "summer"

back_to_caption["4"]["scenery"] = "office"
back_to_caption["4"]["season"] = "night"

back_to_caption["5"]["scenery"] = "office"
back_to_caption["5"]["season"] = "summer"

back_to_caption["6"]["scenery"] = "beach"
back_to_caption["6"]["season"] = "summer"

back_to_caption["7"]["scenery"] = "beach"
back_to_caption["7"]["season"] = "summer"

back_to_caption["8"]["scenery"] = "beach"
back_to_caption["8"]["season"] = "summer"

back_to_caption["9"]["scenery"] = "beach"
back_to_caption["9"]["season"] = "summer"

back_to_caption["10"]["scenery"] = "beach"
back_to_caption["10"]["season"] = "summer"

back_to_caption["11"]["scenery"] = "christmass"
back_to_caption["11"]["season"] = "night"

back_to_caption["12"]["scenery"] = "christmass"
back_to_caption["12"]["season"] = "winter"

back_to_caption["13"]["scenery"] = "forest"
back_to_caption["13"]["season"] = "summer"

back_to_caption["14"]["scenery"] = "open field"
back_to_caption["14"]["season"] = "winter"

back_to_caption["15"]["scenery"] = "city"
back_to_caption["15"]["season"] = "dusk"

back_to_caption["15"]["scenery"] = "city"
back_to_caption["15"]["season"] = "dusk"

back_to_caption["16"]["scenery"] = "city"
back_to_caption["16"]["season"] = "dusk"

back_to_caption["17"]["scenery"] = "city"
back_to_caption["17"]["season"] = "summer"

back_to_caption["18"]["scenery"] = "city"
back_to_caption["18"]["season"] = "night"

back_to_caption["19"]["scenery"] = "city"
back_to_caption["19"]["season"] = "dusk"

back_to_caption["20"]["scenery"] = "city"
back_to_caption["20"]["season"] = "day"

back_to_caption["21"]["scenery"] = "city"
back_to_caption["21"]["season"] = "dusk"

back_to_caption["22"]["scenery"] = "park"
back_to_caption["22"]["season"] = "summer"

back_to_caption["23"]["scenery"] = "park"
back_to_caption["23"]["season"] = "summer"

back_to_caption["24"]["scenery"] = "park"
back_to_caption["24"]["season"] = "summer"

back_to_caption["25"]["scenery"] = "park"
back_to_caption["25"]["season"] = "summer"

back_to_caption["26"]["scenery"] = "park"
back_to_caption["26"]["season"] = "summer"

back_to_caption["27"]["scenery"] = "playground"
back_to_caption["27"]["season"] = "mid day"

back_to_caption["28"]["scenery"] = "eifel tower"
back_to_caption["28"]["season"] = "autumn"

back_to_caption["29"]["scenery"] = "eifel tower"
back_to_caption["29"]["season"] = "autumn"

back_to_caption["30"]["scenery"] = "eifel tower"
back_to_caption["30"]["season"] = "dark"

back_to_caption["31"]["scenery"] = "atomium"
back_to_caption["31"]["season"] = "spring"

back_to_caption["32"]["scenery"] = "atomium"
back_to_caption["32"]["season"] = "summer"

back_to_caption["33"]["scenery"] = "red"
back_to_caption["33"]["season"] = ""

back_to_caption["34"]["scenery"] = "green"
back_to_caption["34"]["season"] = ""

back_to_caption["35"]["scenery"] = "yellow"
back_to_caption["35"]["season"] = ""

back_to_caption["36"]["scenery"] = "blue clouds"
back_to_caption["36"]["season"] = ""

back_to_caption["37"]["scenery"] = "purple"
back_to_caption["37"]["season"] = ""

back_to_caption["38"]["scenery"] = "gray"
back_to_caption["38"]["season"] = ""

back_to_caption["39"]["scenery"] = "black"
back_to_caption["39"]["season"] = ""

back_to_caption["40"]["scenery"] = "white"
back_to_caption["40"]["season"] = ""

for folder_name in os.listdir("."):
    if folder_name[0].isupper() and os.path.isdir(folder_name):
        for i in range(1, 41):
            scenery = back_to_caption[str(i)]["scenery"]
            caption = f"{folder_name} on {scenery}"
            if i <= 32:
                season = back_to_caption[str(i)]["season"]
                caption = f"{caption} during {season}"
            caption = f"{caption} with a clear logo"
            if folder_name not in ["L7YU", "T1UP"]:
                caption = f"{caption} and a red cape"
            file_path = os.path.join(folder_name, f"{folder_name}_{i}.txt")
            with open(file_path, "w") as file:
                file.write(caption)