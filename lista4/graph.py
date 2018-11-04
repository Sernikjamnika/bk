import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.ticker import MaxNLocator



data = pd.read_csv('graph_data.txt')
lengths = data.Length.unique()
worst_case = [data.Time[data.Length == i].max() for i in lengths]
average_case = [data.Time[data.Length == i].iloc[len(lengths)] for i in lengths]
best_case = [data.Time[data.Length == i].min() for i in lengths]
fig, ax = plt.subplots(figsize=(15,10))
ax.plot(lengths, worst_case)
ax.plot(lengths, best_case)
ax.plot(lengths, average_case)
ax.set_ylabel('time[s]')
ax.set_xlabel('length of k1')
ax.set_yticks(np.arange(0, 8, 0.3))
ax.xaxis.set_major_locator(MaxNLocator(integer=True))

print(lengths)
plt.grid(True)
plt.show()



