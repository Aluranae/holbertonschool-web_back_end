#!/usr/bin/env python3
"""
Pagination hypermédia résiliente aux suppressions
"""

import csv
import math
from typing import Dict, List


class Server:
    """Classe Server permettant de paginer
    une base de données de prénoms populaires.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Dataset mis en cache
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexé par position de tri, commençant à 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        Return a dictionary with deletion-resilient pagination info.
        Dictionary should contain:
            - "index": current start index of the return page
            - "next_index": index of the first item after the current page
            - "page_size": current page size
            - "data": the actual page of the dataset
        """
        assert index >= 0 and index < len(self.indexed_dataset())
        data = []
        current = index
        indexed_data = self.indexed_dataset()
        while len(data) < page_size:
            if current in indexed_data:
                data.append(indexed_data[current])
            current += 1

        return {
            "index": index,
            "data": data,
            "page_size": len(data),
            "next_index": current
        }
